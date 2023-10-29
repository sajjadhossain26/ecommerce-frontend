// create public router

import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Home from "../pages/home/Home";
import Shop from "../pages/shop/Shop";
import SingleProduct from "../pages/shop/singleProduct/SingleProduct";

const publicRouter = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/shop",
    element: <Shop />,
  },

  {
    path: "/shop/:id",
    element: <SingleProduct />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
];

// export router
export default publicRouter;
