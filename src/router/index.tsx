import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Styles } from "../styles/styles";
const Home = lazy(() => import(`../pages/Home`));
const Buy = lazy(() => import(`../pages/Buy`));
const Sale = lazy(() => import(`../pages/Sale`));
const SaleResult = lazy(() => import(`../pages/SaleResult`));

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/comprar/detalle/:id" element={ <Buy /> } />
        <Route path="/ventas/:id" element={ <Sale /> } />
        <Route path="/respuesta" element={ <SaleResult /> } />
      </Routes>
    </Suspense>
  );
};

export default Router;
