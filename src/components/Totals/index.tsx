import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllProducts } from '../../store/selectors';
import { useProducts } from '../../store/reducers/useProducts';

import {
  Wrapper,
  TotalItem,
  Amount,
  Label,
  QuantitySelector,
  QuantitySelectorBtn,
} from './styles';
import { setQuantity } from '../../store/reducers/productSlice';

export function Totals() {
  const products = useSelector(selectAllProducts);
  const { productPrice, currentProductID } = useProducts();

  const dispatch = useDispatch();
  const currentProductId = currentProductID;

  const [quantities, setQuantities] = useState<Record<number, { qty: number; price: number }>>({});

  useEffect(() => {
    dispatch(setQuantity(quantities[currentProductId]?.qty ?? 0));
  }, [quantities, currentProductId, dispatch]);

  const calculateTotalByType = (type: 'NACIONAL' | 'IMPORTADO') => {
    return products.reduce((acc, product) => {
      if (product.type !== type) return acc;

      return (
        acc +
        product.skus.reduce((skuAcc, sku) => {
          const entry = quantities[product.id];
          if (!entry) return skuAcc;
          return skuAcc + (sku?.price ?? 0) * entry.qty;
        }, 0)
      );
    }, 0);
  };

  const importado = calculateTotalByType('IMPORTADO');

  const increaseQuantity = () => {
    setQuantities((prev) => {
      const current = prev[currentProductId] ?? { qty: 0, price: productPrice };
      return {
        ...prev,
        [currentProductId]: {
          qty: current.qty + 1,
          price: productPrice,
        },
      };
    });
  };

  const decreaseQuantity = () => {
    setQuantities((prev) => {
      const current = prev[currentProductId] ?? { qty: 0, price: productPrice };
      return {
        ...prev,
        [currentProductId]: {
          qty: Math.max(0, current.qty - 1),
          price: current.price,
        },
      };
    });
  };

  const totalPrice = Object.values(quantities).reduce((acc, { qty, price }) => {
    return acc + price * qty * 6;
  }, 0);

  const fmt = (value: number) =>
    value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  return (
    <Wrapper>
      <TotalItem>
        <p>Total Importado:</p>
        <Amount $color="var(--text-primary)" $large>
          {fmt(importado)}
        </Amount>
      </TotalItem>

      <TotalItem>
        <QuantitySelector>
          <QuantitySelectorBtn onClick={decreaseQuantity}>
            -
          </QuantitySelectorBtn>

          {quantities[currentProductId]?.qty ?? 0}

          <QuantitySelectorBtn onClick={increaseQuantity}>
            +
          </QuantitySelectorBtn>
        </QuantitySelector>
      </TotalItem>

      <TotalItem>
        <Label>Total Nacional:</Label>
        <Amount $color="var(--text-primary)" $large>
          {fmt(totalPrice)}
        </Amount>
      </TotalItem>
    </Wrapper>
  );
}

export default Totals;
