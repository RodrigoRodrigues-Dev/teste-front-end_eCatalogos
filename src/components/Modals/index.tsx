import type { Product } from '../../types';
import {
  Overlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseBtn,
  InfoGrid,
  InfoRow,
  InfoKey,
  InfoVal,
  SkuTable,
} from './styles';

// ---- InfoModal ----

interface InfoModalProps {
  product: Product;
  onClose: () => void;
}

export function InfoModal({ product, onClose }: InfoModalProps) {
  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Informações do Produto</ModalTitle>
          <CloseBtn onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </CloseBtn>
        </ModalHeader>

        <InfoGrid>
          <InfoRow>
            <InfoKey>Nome</InfoKey>
            <InfoVal>{product.name}</InfoVal>
          </InfoRow>
          <InfoRow>
            <InfoKey>Referência</InfoKey>
            <InfoVal>{product.reference}</InfoVal>
          </InfoRow>
          <InfoRow>
            <InfoKey>Tipo</InfoKey>
            <InfoVal>{product.type}</InfoVal>
          </InfoRow>
          <InfoRow>
            <InfoKey>Gênero</InfoKey>
            <InfoVal>{product.gender}</InfoVal>
          </InfoRow>
          <InfoRow>
            <InfoKey>Categoria</InfoKey>
            <InfoVal>{product.categories}</InfoVal>
          </InfoRow>
          <InfoRow>
            <InfoKey>Subcategoria</InfoKey>
            <InfoVal>{product.subcategories}</InfoVal>
          </InfoRow>
          <InfoRow>
            <InfoKey>Pronta Entrega</InfoKey>
            <InfoVal>{product.promptDelivery ? 'Sim' : 'Não'}</InfoVal>
          </InfoRow>
          <InfoRow>
            <InfoKey>Preço unitário</InfoKey>
            <InfoVal>R$ {product.skus[0]?.price.toFixed(2).replace('.', ',')}</InfoVal>
          </InfoRow>
          {product.description && (
            <InfoRow>
              <InfoKey>Descrição</InfoKey>
              <InfoVal>{product.description}</InfoVal>
            </InfoRow>
          )}
        </InfoGrid>

        <SkuTable>
          <thead>
            <tr>
              <th>Tamanho</th>
              <th>Código</th>
              <th>Estoque</th>
              <th>Múltiplo</th>
            </tr>
          </thead>
          <tbody>
            {product.skus.map((sku) => (
              <tr key={sku.id}>
                <td>{sku.size}</td>
                <td>{sku.code}</td>
                <td>{sku.stock.toLocaleString('pt-BR')}</td>
                <td>{sku.multipleQuantity}</td>
              </tr>
            ))}
          </tbody>
        </SkuTable>
      </Modal>
    </Overlay>
  );
}
