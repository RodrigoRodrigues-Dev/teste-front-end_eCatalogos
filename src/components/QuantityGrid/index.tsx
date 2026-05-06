// src/components/QuantityGrid/QuantityGrid.tsx
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { SKU, Product } from '../../types';
import { setQuantity } from '../../store/reducers/cartSlice';
import type { RootState } from '../../store';
import {
  Wrapper,
  GridHeader,
  ColLabel,
  GridRow,
  SizeCell,
  StockCell,
  MultiCell,
  QtyCell,
  QtyInput,
  SubtotalCell,
  TotalRow,
  TotalLabel,
  TotalValues,
  TotalQty,
  TotalValue,
} from './styles';

interface QuantityGridProps {
  product: Product;
}

export function QuantityGrid({ product }: QuantityGridProps) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const productCart = useMemo(() => cart[product.id] ?? {}, [cart, product.id]);

  const handleChange = (sku: SKU, rawValue: string) => {
    const parsed = parseInt(rawValue, 10);
    if (isNaN(parsed) || parsed < 0) {
      dispatch(setQuantity({ productId: product.id, skuId: sku.id, quantity: 0 }));
      return;
    }

    // Enforce multipleQuantity
    const rounded = Math.round(parsed / sku.multipleQuantity) * sku.multipleQuantity;
    const final = Math.max(rounded, parsed > 0 ? sku.minQuantity : 0);
    dispatch(setQuantity({ productId: product.id, skuId: sku.id, quantity: final }));
  };

  const totalQty = Object.values(productCart).reduce((s: number, q: number) => s + q, 0);
  const totalValue = product.skus.reduce((s: number, sku: SKU) => {
    return s + (productCart[sku.id] ?? 0) * sku.price;
  }, 0);

  return (
    <Wrapper>
      <GridHeader>
        <ColLabel>Tamanho</ColLabel>
        <ColLabel $center>Estoque</ColLabel>
        <ColLabel $center>Múltiplo</ColLabel>
        <ColLabel $center>Qtd</ColLabel>
        <ColLabel $right>Subtotal</ColLabel>
      </GridHeader>

      {product.skus.map((sku) => {
        const qty = productCart[sku.id] ?? 0;
        const subtotal = qty * sku.price;

        return (
          <GridRow key={sku.id} $hasValue={qty > 0}>
            <SizeCell>{sku.size}</SizeCell>
            <StockCell $center>{sku.stock.toLocaleString('pt-BR')}</StockCell>
            <MultiCell $center>{sku.multipleQuantity}</MultiCell>
            <QtyCell>
              <QtyInput
                type="number"
                min={0}
                value={qty === 0 ? '' : qty}
                placeholder="0"
                onChange={(e) => handleChange(sku, e.target.value)}
                onBlur={(e) => handleChange(sku, e.target.value)}
                $hasValue={qty > 0}
              />
            </QtyCell>
            <SubtotalCell $right $hasValue={qty > 0}>
              {qty > 0 ? `R$ ${subtotal.toFixed(2).replace('.', ',')}` : '—'}
            </SubtotalCell>
          </GridRow>
        );
      })}

      <TotalRow>
        <TotalLabel>Total do produto</TotalLabel>
        <TotalValues>
          <TotalQty>{totalQty} un.</TotalQty>
          <TotalValue>
            R$ {totalValue.toFixed(2).replace('.', ',')}
          </TotalValue>
        </TotalValues>
      </TotalRow>
    </Wrapper>
  );
}

export default QuantityGrid;
