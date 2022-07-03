import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import MainLayout from "./layouts/MainLayout";
import { FC, lazy, Suspense } from "react";
import Loader from "./components/UI/Loader";

const Product = lazy(
  () => import(/* webpackChunkName: "Product" */ "./pages/Product/Product")
);
const Cart = lazy(
  () => import(/* webpackChunkName: "Cart" */ "./pages/Cart/Cart")
);
const Sale = lazy(
  () => import(/* webpackChunkName: "Sale" */ "./pages/Sale/Sale")
);
const About = lazy(
  () => import(/* webpackChunkName: "About" */ "./pages/About/About")
);
const Contact = lazy(
  () => import(/* webpackChunkName: "Contact" */ "./pages/Contact/Contact")
);
const NotFound = lazy(
  () => import(/* webpackChunkName: "NotFound" */ "./pages/NotFound/NotFound")
);

const App: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route
          path="cart"
          element={
            <Suspense fallback={<Loader />}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="sale"
          element={
            <Suspense>
              <Sale />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<Loader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<Loader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="ice-cream/:id"
          element={
            <Suspense>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="not-found"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
