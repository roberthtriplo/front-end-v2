import { lazy } from "react";
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Buy = () => {
  return (
    <Container>
      <ScrollToTop />
      
    </Container>
  );
};

export default Buy;
