import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productsData } from "../../data/products";
import { setGalleryScrollPosition, setProductPrice, nextCategory, previousCategory, setCurrentProductID } from '../../store/reducers/productSlice';
import { selectGalleryScrollPosition } from '../../store/selectors';
import { useProducts } from '../../store/reducers/useProducts';
import { InfoModal } from '../Modals';

import {
  Wrapper,
  InfoBar,
  ImageArea,
  NavArrow,
  TypeBadge,
  MainImage,
  Thumbnails,
  ThumbButton,
  Thumb,
  Price,
  InfoBtn,
  HeaderControls,
  ProductDetailsBar,
  ProductName,
  Ref,
  ImageGalleryScroll
} from './styles';

const ProductViewer = () => {
  const [mainImageIndex, setMainImageIndex] = useState(0);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const galleryScrollPosition = useSelector(selectGalleryScrollPosition);
  const { filteredProducts, allProducts, currentIndex, setCurrentIndex } = useProducts();

  const dispatch = useDispatch();

  type Product = typeof productsData["products"][number];

  const categoryOrder = ["Camiseta", "Blusa Moletom", "Calça", "Polo", "Casaco"];

  const sortProductsByCategoryOrder = (products: Product[]) => {
    return [...products].sort((a, b) => {
      const indexA = categoryOrder.indexOf(a.categories);
      const indexB = categoryOrder.indexOf(b.categories);
      const safeA = indexA === -1 ? 999 : indexA;
      const safeB = indexB === -1 ? 999 : indexB;
      return safeA - safeB;
    });
  };

  const currentProduct = filteredProducts[currentIndex];

  useEffect(() => {
    if (currentProduct) {
      dispatch(setProductPrice(currentProduct.skus[0].price));
      dispatch(setCurrentProductID(currentProduct.id));
    }
  }, [currentProduct, dispatch]);

  const handleImageChange = (index: number) => {
    if (currentProduct.images[index]) {
      setMainImageIndex(index);
    }
  };

  const handleNextProduct = () => {
    const nextIndex = currentIndex + 1;
    const isLastInCategory = nextIndex >= filteredProducts.length;
    const isLastCategory =
      categoryOrder.indexOf(filteredProducts[0]?.categories) === categoryOrder.length - 1;

    if (isLastInCategory && isLastCategory) {
      dispatch(setGalleryScrollPosition(0));
      dispatch(nextCategory());
      setCurrentIndex(0);
    } else if (isLastInCategory) {
      const nextCategoryName =
        categoryOrder[categoryOrder.indexOf(filteredProducts[0]?.categories) + 1];
      const globalIndexAfter = sortProductsByCategoryOrder(allProducts).findIndex(
        (p) => p.categories === nextCategoryName
      );
      dispatch(setGalleryScrollPosition(globalIndexAfter * 594));
      dispatch(nextCategory());
      setCurrentIndex(0);
    } else {
      dispatch(setGalleryScrollPosition(galleryScrollPosition + 594));
      setCurrentIndex(nextIndex);
    }

    setMainImageIndex(0);
  };

  const handlePrevProduct = () => {
    const isFirstInCategory = currentIndex === 0;
    const isFirstCategory =
      categoryOrder.indexOf(filteredProducts[0]?.categories) === 0;

    if (isFirstInCategory && isFirstCategory) {
      const lastCategoryName = categoryOrder[categoryOrder.length - 1];
      const lastCategoryProducts = allProducts.filter(
        (p) => p.categories === lastCategoryName
      );
      const globalLastIndex = sortProductsByCategoryOrder(allProducts).findLastIndex(
        (p) => p.categories === lastCategoryName
      );
      dispatch(setGalleryScrollPosition(globalLastIndex * 594));
      dispatch(previousCategory());
      setCurrentIndex(lastCategoryProducts.length - 1);
    } else if (isFirstInCategory) {
      const currentCategoryIndex = categoryOrder.indexOf(filteredProducts[0]?.categories);
      const prevCategoryName = categoryOrder[currentCategoryIndex - 1];
      const prevCategoryProducts = allProducts.filter(
        (p) => p.categories === prevCategoryName
      );
      const globalPrevLastIndex = sortProductsByCategoryOrder(allProducts).findLastIndex(
        (p) => p.categories === prevCategoryName
      );
      dispatch(setGalleryScrollPosition(globalPrevLastIndex * 594));
      dispatch(previousCategory());
      setCurrentIndex(prevCategoryProducts.length - 1);
    } else {
      dispatch(setGalleryScrollPosition(galleryScrollPosition - 594));
      setCurrentIndex(currentIndex - 1);
    }

    setMainImageIndex(0);
  };

  if (!currentProduct) return null;

  return (
    <>
      <ImageArea>
        <NavArrow
          $side="left"
          onClick={handlePrevProduct}
          aria-label="Produto anterior"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </NavArrow>

        <TypeBadge $isNacional={currentProduct.type === 'NACIONAL'}>
          {currentProduct.type}
        </TypeBadge>

        <ImageGalleryScroll style={{ left: `-${galleryScrollPosition}px` }}>
          {sortProductsByCategoryOrder(allProducts).map((product) => (
            <MainImage
              key={product.id}
              src={product.images[Math.min(mainImageIndex, product.images.length - 1)]?.path}
              alt={product.name}
            />
          ))}
        </ImageGalleryScroll>

        <NavArrow
          $side="right"
          onClick={handleNextProduct}
          aria-label="Próximo produto"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </NavArrow>
      </ImageArea>

      <Wrapper>
        <InfoBar>
          <HeaderControls>
            <InfoBtn
              title="Informações do produto"
              onClick={() => setShowInfoModal(true)}
            >
              <img src="data:image/svg+xml,%3csvg%20width='38'%20height='35'%20viewBox='0%200%2038%2035'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cellipse%20cx='18.5105'%20cy='17.5'%20rx='18.5105'%20ry='17.5'%20fill='%237097AA'/%3e%3cpath%20d='M17.9817%207C12.1493%207%207.4043%2011.486%207.4043%2017C7.4043%2022.514%2012.1493%2027%2017.9817%2027C23.8141%2027%2028.5592%2022.514%2028.5592%2017C28.5592%2011.486%2023.8141%207%2017.9817%207ZM19.0395%2022H16.924V16H19.0395V22ZM19.0395%2014H16.924V12H19.0395V14Z'%20fill='white'/%3e%3c/svg%3e" alt="" />
            </InfoBtn>

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

            <img src="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Group%2046'%3e%3ccircle%20id='Ellipse%203'%20cx='14'%20cy='14'%20r='14'%20fill='%237097AA'/%3e%3cg%20id='&%23240;&%23159;&%23166;&%23134;%20icon%20&%2334;cart&%2334;'%3e%3cpath%20id='Vector'%20d='M5.65243%207.5059C5.35831%207.55348%205.09494%207.71721%204.92024%207.96109C4.74554%208.20497%204.67384%208.50902%204.7209%208.80635C4.76796%209.10368%204.92992%209.36993%205.17117%209.54653C5.41242%209.72314%205.71318%209.79562%206.00729%209.74805H9.33418L9.53379%2010.3086L10.4431%2013.1113L11.3525%2015.914C11.4412%2016.2054%2011.8183%2016.4745%2012.1066%2016.4745H19.8693C20.1798%2016.4745%2020.5347%2016.2054%2020.6234%2015.914L22.4199%2010.3086C22.5087%2010.0171%2022.3756%209.74805%2022.0651%209.74805H12.2175L11.3747%208.13371C11.2849%207.94841%2011.1463%207.79176%2010.9741%207.68099C10.8019%207.57022%2010.6028%207.50963%2010.3988%207.5059L5.96293%207.5059C5.89653%207.49984%205.82972%207.49984%205.76332%207.5059C5.719%207.50321%205.67456%207.50321%205.63025%207.5059L5.65243%207.5059ZM12.6611%2018.7166C12.0401%2018.7166%2011.5521%2019.2099%2011.5521%2019.8377C11.5521%2020.4655%2012.0401%2020.9588%2012.6611%2020.9588C13.2821%2020.9588%2013.77%2020.4655%2013.77%2019.8377C13.77%2019.2099%2013.2821%2018.7166%2012.6611%2018.7166ZM19.3148%2018.7166C18.6938%2018.7166%2018.2059%2019.2099%2018.2059%2019.8377C18.2059%2020.4655%2018.6938%2020.9588%2019.3148%2020.9588C19.9359%2020.9588%2020.4238%2020.4655%2020.4238%2019.8377C20.4238%2019.2099%2019.9359%2018.7166%2019.3148%2018.7166Z'%20fill='white'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e" alt="" />
          </HeaderControls>

          <ProductDetailsBar>
            <ProductName>{currentProduct.name.split(" ")[0]}</ProductName>
            <Ref>Ref: {currentProduct.reference}</Ref>
            <span>un:<Price>R$ {currentProduct.skus[0].price.toFixed(2).replace('.', ',')}</Price></span>
          </ProductDetailsBar>
        </InfoBar>

        {showInfoModal && (
          <InfoModal product={currentProduct} onClose={() => setShowInfoModal(false)} />
        )}
      </Wrapper>
    </>
  );
};

export default ProductViewer;
