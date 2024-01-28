import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home";
import Bicicletas from "./routes/bicicletas";
import Contato from "./routes/contato";
import Sobre from "./routes/sobre";

import { register } from "swiper/element/bundle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import Cart from "./routes/cart";
import { BikeProvider } from "./context/BikeContext";
import BikeDetails from "./routes/bikeDetails";
register();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bicicletas",
        element: <Bicicletas />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/details/:id",
        element: <BikeDetails />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BikeProvider>
      <RouterProvider router={router} />
    </BikeProvider>
  </React.StrictMode>
);
