import { Home, Product,Events, SignIn, SignUp } from "@/pages";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Productos",
    path: "/product",
    element: <Product />,
  },
  {
    name: "Eventos",
    path: "/events",
    element: <Events />,
  },

  {
    name: "Login",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    name: "Registro",
    path: "/sign-up",
    element: <SignUp />,
  },
];

export default routes;
