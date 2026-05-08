import Container from "../components/Container";
import Header from "../components/Header";
import ProductViewer from "../components/ProductViewer";
import QuantityGrid from "../components/QuantityGrid";
import Totals from "../components/Totals";


const PurchasePage = () => {
  return (
    <Container>
      <Header />
      <main>
        <ProductViewer />
        <QuantityGrid />
      </main>
      <Totals />
    </Container>
  )
}

export default PurchasePage;
