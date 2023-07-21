import { lazy } from "react";
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const SaleResult = () => {
  return (
    <Container>
       <div id='header_top'></div>
      <ScrollToTop />
      <SaleResult />
      
    </Container>
  );
};

export default SaleResult;
