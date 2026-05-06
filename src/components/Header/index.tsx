import { useState } from 'react';
import {
  Wrapper, TopBar, CategoryBar,
  LeftControls, IconBtn, AppName,
  RightControls, FuncBtn, CategoryTab,
  Separator
} from "./styles";

import { useProducts } from '../../store/reducers/useProducts';
import { SearchModal } from '../Modals';

const Header = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  const { categories, selectedCategory, selectCategory, allProducts, setCurrentIndex } = useProducts();

  const handleSelectProduct = (productId: number, productCategory: string) => {
    selectCategory(productCategory);

    const categoryProducts = allProducts.filter(p => p.categories === productCategory);
    const productIndex = categoryProducts.findIndex(p => p.id === productId);

    if (productIndex !== -1) {
      setCurrentIndex(productIndex);
    }
  };

  return (
    <header>
      <Wrapper>
        <TopBar>
          <LeftControls>
            <IconBtn title="Voltar" disabled>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </IconBtn>
            <AppName>Força de Vendas</AppName>
          </LeftControls>

          <RightControls>
            <IconBtn
              title="Buscar por referência"
              onClick={() => setShowSearchModal(true)}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </IconBtn>
            <IconBtn title="Carrinho" disabled>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <path d="M16 10a4 4 0 01-8 0" />
              </svg>
            </IconBtn>
            <FuncBtn title="Funções" disabled>F</FuncBtn>
          </RightControls>
        </TopBar>

        <Separator/>

        <CategoryBar>
          {categories.map((cat) => (
            <CategoryTab
              $active={selectedCategory === cat}
              key={cat}
              onClick={() => selectCategory(cat)}
            >
              {cat}
            </CategoryTab>
          ))}
        </CategoryBar>
      </Wrapper>

      {showSearchModal && (
        <SearchModal
          products={allProducts}
          onClose={() => setShowSearchModal(false)}
          onSelect={handleSelectProduct}
        />
      )}
    </header>
  )
}
export default Header;
