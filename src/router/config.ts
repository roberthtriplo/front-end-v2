const routes = [
  {
    path: "/",
    exact: true,
    component: "Home",
  },
  {
    path: "/comprar/detalle/:id",
    exact: true,
    component: "Buy",
  },
  {
    path: "/ventas/:id",
    exact: true,
    component: "Sale",
  },
  {
    path: "/ventas/resultado/:id",
    exact: true,
    component: "SaleResult",
  },
];

export default routes;
