import {
  Wrapper, CategoryBar,
  LeftControls, IconBtn, HomeBtn,
  CatName, ProductIndex
} from "./styles";

import { useProducts } from '../../store/reducers/useProducts';
import { useDispatch, useSelector } from 'react-redux';
import { setGalleryScrollPosition } from '../../store/reducers/productSlice';
import { nextCategory, previousCategory } from '../../store/reducers/productSlice';
import { selectGalleryScrollPosition } from "../../store/selectors";

const Header = () => {
const { selectedCategory, filteredProducts, allProducts } = useProducts();
  const galleryScrollPosition = useSelector(selectGalleryScrollPosition);
  const dispatch = useDispatch();

  const categoryOrder = ["Camiseta", "Blusa Moletom", "Calça", "Polo", "Casaco"];

  const getScrollPositionForCategory = (categoryName: string) => {
    let totalBefore = 0;
    for (const cat of categoryOrder) {
      if (cat === categoryName) break;
      totalBefore += allProducts.filter(p => p.categories === cat).length;
    }
    return totalBefore * 594;
  };

  const handleNextCategory = () => {
    const currentCatIndex = categoryOrder.indexOf(selectedCategory);
    const nextCatName = categoryOrder[currentCatIndex + 1] ?? categoryOrder[0];

    dispatch(nextCategory());
    dispatch(setGalleryScrollPosition(getScrollPositionForCategory(nextCatName)));
  };

  const handlePreviousCategory = () => {
    const currentCatIndex = categoryOrder.indexOf(selectedCategory);
    const prevCatName = categoryOrder[currentCatIndex - 1] ?? categoryOrder[categoryOrder.length - 1];

    dispatch(previousCategory());
    dispatch(setGalleryScrollPosition(getScrollPositionForCategory(prevCatName)));
  };


  return (
    <Wrapper>
      <LeftControls>
        <IconBtn title="Voltar" disabled>
          <svg stroke="currentColor" fill="#7097AA" strokeWidth="0" viewBox="0 0 24 24" cursor="pointer" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M8 7V11L2 6L8 1V5H13C17.4183 5 21 8.58172 21 13C21 17.4183 17.4183 21 13 21H4V19H13C16.3137 19 19 16.3137 19 13C19 9.68629 16.3137 7 13 7H8Z"></path></svg>
        </IconBtn>
      </LeftControls>

      <CategoryBar>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ cursor: 'pointer' }}
          onClick={() => dispatch(handlePreviousCategory)}
        >
          <path d="M14.5 6L8.5 12L14.5 18" stroke="#7097AA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <ProductIndex>{filteredProducts.length}</ProductIndex>
        <CatName>{selectedCategory}</CatName>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ cursor: 'pointer' }}
          onClick={() => dispatch(handleNextCategory)}
        >
          <path d="M9.5 6L15.5 12L9.5 18" stroke="#7097AA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </CategoryBar>

      <HomeBtn>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg"><path d="M64 32C28.7 32 0 60.7 0 96V256 448c0 17.7 14.3 32 32 32s32-14.3 32-32V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64z"></path></svg>
      </HomeBtn>
    </Wrapper>
  )
}
export default Header;
