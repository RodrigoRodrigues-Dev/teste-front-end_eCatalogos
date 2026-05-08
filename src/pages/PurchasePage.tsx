import Container from "../components/Container";
import Header from "../components/Header";
import ProductViewer from "../components/ProductViewer";
import QuantityGrid from "../components/QuantityGrid";
import Totals from "../components/Totals";

import { useProducts } from "../store/reducers/useProducts";

const PurchasePage = () => {
  const { filteredProducts, currentIndex } = useProducts();
  const currentProduct = filteredProducts[currentIndex];

  return (
    <Container>
      <Header />
      <main>
        <ProductViewer />
        {currentProduct && <QuantityGrid product={currentProduct} />}
      </main>
      <Totals />
    </Container>
  )
}

export default PurchasePage;
