import { useState } from 'react';
import type { Product } from '../../types';
import {
  Overlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseBtn,
  SearchInput,
  ResultList,
  EmptyMsg,
  ResultItem,
  ColorDot,
  ResultInfo,
  ResultName,
  ResultRef,
  ResultPrice,
  InfoGrid,
  InfoRow,
  InfoKey,
  InfoVal,
  SkuTable,
} from './styles';

interface SearchModalProps {
  products: Product[];
  onClose: () => void;
  onSelect: (productId: number, productCategory: string) => void;
}

export function SearchModal({ products, onClose, onSelect }: SearchModalProps) {
  const [query, setQuery] = useState('');

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.reference.toLowerCase().includes(query.toLowerCase()) ||
          p.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Buscar Produto</ModalTitle>
          <CloseBtn onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </CloseBtn>
        </ModalHeader>

        <SearchInput
          autoFocus
          type="text"
          placeholder="Digite a referência ou nome..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <ResultList>
          {query.trim() && results.length === 0 && (
            <EmptyMsg>Nenhum produto encontrado.</EmptyMsg>
          )}
          {results.map((p) => (
            <ResultItem
              key={p.id}
              onClick={() => {
                onSelect(p.id, p.categories);
                onClose();
              }}
            >
              <ColorDot color={p.hexCode} />
              <ResultInfo>
                <ResultName>{p.name}</ResultName>
                <ResultRef>{p.reference}</ResultRef>
              </ResultInfo>
              <ResultPrice>R$ {p.skus[0]?.price.toFixed(2).replace('.', ',')}</ResultPrice>
            </ResultItem>
          ))}
        </ResultList>
      </Modal>
    </Overlay>
  );
}

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
