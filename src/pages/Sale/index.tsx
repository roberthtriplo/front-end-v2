import { lazy } from "react";
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const SaleDetail = lazy(() => import("../../components/SaleDetail"));

const Sale = () => {
  return (
    <Container>
       <div id='header_top'></div>
      <ScrollToTop />
      <SaleDetail />
      
    </Container>
  );
};

export default Sale;
