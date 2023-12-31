import { lazy } from "react";
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const BuyDetail = lazy(() => import("../../components/BuyDetail"));

const Buy = () => {
  return (
    <Container>
      <div id='header_top'></div>
      <ScrollToTop />
      <BuyDetail />
    </Container>
  );
};

export default Buy;
