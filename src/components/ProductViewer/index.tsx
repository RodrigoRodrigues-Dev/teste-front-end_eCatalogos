import { useState } from 'react';
import { useProducts } from '../../store/reducers/useProducts';
import { InfoModal } from '../Modals';

import {
  Wrapper,
  ProductMeta,
  InfoBar,
  ProductName,
  RefRow,
  Ref,
  TypeBadge,
  DeliveryBadge,
  Counter,
  ImageArea,
  NavArrow,
  RefColor,
  MainImage,
  Thumbnails,
  ThumbButton,
  Thumb,
  PriceInfoRow,
  Price,
  InfoBtn

} from './styles';

const ProductViewer = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const { filteredProducts, currentIndex, setCurrentIndex } = useProducts();

  const currentProduct = filteredProducts[currentIndex];

  const handleImageChange = (index: number) => {
    setMainImageIndex(index);
  };

  const handlePrevProduct = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNextProduct = () => {
    setCurrentIndex(currentIndex + 1);
  };

  if (!currentProduct) return null;

  const isFirstProduct = currentIndex === 0;
  const isLastProduct = currentIndex === filteredProducts.length - 1;

  return (
    <Wrapper>
      <InfoBar>
        <ProductMeta>
          <ProductName>{currentProduct.name}</ProductName>
          <RefRow>
            <Ref>Ref: {currentProduct.reference}</Ref>
            <TypeBadge $isNacional={currentProduct.type === 'NACIONAL'}>
              {currentProduct.type}
            </TypeBadge>
            {currentProduct.promptDelivery && (
              <DeliveryBadge>Pronta Entrega</DeliveryBadge>
            )}
          </RefRow>
        </ProductMeta>


        <PriceInfoRow>
          <Price>R$ {currentProduct.skus[0].price.toFixed(2).replace('.', ',')}</Price>
          <InfoBtn
            title="Informações do produto"
            onClick={() => setShowInfoModal(true)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </InfoBtn>
        </PriceInfoRow>
      </InfoBar>

      <Counter>
        {mainImageIndex + 1} / {currentProduct.images.length}
      </Counter>

      <ImageArea>
        <NavArrow
          $side="left"
          onClick={handlePrevProduct}
          disabled={isFirstProduct}
          aria-label="Produto anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </NavArrow>

        <RefColor color={currentProduct.hexCode} />
        <MainImage
          src={currentProduct.images[mainImageIndex]?.path}
          alt={currentProduct.name}
        />

        <NavArrow
          $side="right"
          onClick={handleNextProduct}
          disabled={isLastProduct}
          aria-label="Próximo produto"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </NavArrow>
      </ImageArea>

      <Thumbnails>
        {currentProduct.images.map((img, index) => (
          <ThumbButton
            key={img.id}
            $active={index === mainImageIndex}
            onClick={() => handleImageChange(index)}
            aria-label={`Visualizar imagem ${index + 1}`}
          >
            <Thumb src={img.path} alt={`${currentProduct.name} - imagem ${index + 1}`} />
          </ThumbButton>
        ))}
      </Thumbnails>

      {showInfoModal && (
        <InfoModal product={currentProduct} onClose={() => setShowInfoModal(false)} />
      )}
    </Wrapper>
  );
};

export default ProductViewer;
