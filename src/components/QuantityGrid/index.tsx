import { useProducts } from '../../store/reducers/useProducts';

import {
  Container,
  SizesRow,
  SizeCell,
  QuantityBadge,
  SummaryCell,
  SummaryLabel,
  Divider,
} from './styles';


export function QuantityGrid() {
  const { filteredProducts, quantity } = useProducts();
  const referenceSKUs = filteredProducts[0]?.skus ?? [];

  return (
    <Container>
      <SizesRow>
        {referenceSKUs.map((sku) => (
          <SizeCell key={sku.id}>
            <span>{sku.size}</span>
            <QuantityBadge>0{sku.multipleQuantity}</QuantityBadge>
          </SizeCell>
        ))}

        <Divider>:</Divider>

        <SummaryCell>
          <SummaryLabel>PEÇAS P/ PACK</SummaryLabel>
          <QuantityBadge>6</QuantityBadge>
        </SummaryCell>

        <SummaryCell>
          <SummaryLabel>Nº PEÇAS</SummaryLabel>
          <QuantityBadge>{(quantity * 6)}</QuantityBadge>
        </SummaryCell>
      </SizesRow>
    </Container>
  );
}

export default QuantityGrid;
