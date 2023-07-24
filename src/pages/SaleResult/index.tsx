import { lazy } from "react";
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const SaleResponse = lazy(() => import("../../components/SaleResponse"));

const SaleResult = () => {
  return (
    <Container>
       <div id='header_top'></div>
      <ScrollToTop />
      <SaleResponse />
      
    </Container>
  );
};

export default SaleResult;
