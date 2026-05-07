import { useSelector } from 'react-redux';
import { selectAllProducts } from '../../store/selectors';
import type { RootState } from '../../store';
import { Wrapper, TotalItem, Dot, Amount, Divider, Label } from './styles';

export function Totals() {
  const products = useSelector(selectAllProducts);
  const cart = useSelector((state: RootState) => state.cart);

  const calculateTotalByType = (type: 'NACIONAL' | 'IMPORTADO') => {
    return products.reduce((acc, product) => {
      if (product.type !== type) return acc;

      const productCart = cart[product.id];
      if (!productCart) return acc;

      return (
        acc +
        Object.entries(productCart).reduce((skuAcc, [skuId, quantity]) => {
          const sku = product.skus.find((s) => s.id === Number(skuId));
          return skuAcc + (sku?.price ?? 0) * quantity;
        }, 0)
      );
    }, 0);
  };

  const nacional = calculateTotalByType('NACIONAL');
  const importado = calculateTotalByType('IMPORTADO');
  const total = nacional + importado;

  const fmt = (v: number) =>
    v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <Wrapper>
      <TotalItem>
        <Dot $color="var(--nacional)" />
        <Label>Nacional</Label>
        <Amount $color="var(--nacional)">{fmt(nacional)}</Amount>
      </TotalItem>
      <Divider />
      <TotalItem>
        <Dot $color="var(--importado)" />
        <Label>Importado</Label>
        <Amount $color="var(--importado)">{fmt(importado)}</Amount>
      </TotalItem>
      <Divider />
      <TotalItem>
        <Label style={{ fontWeight: 700 }}>Total Geral</Label>
        <Amount $color="var(--text-primary)" $large>
          {fmt(total)}
        </Amount>
      </TotalItem>
    </Wrapper>
  );
}

export default Totals;
