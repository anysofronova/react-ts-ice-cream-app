import { Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Sale from "./pages/Sale/Sale";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Product from "./pages/Product/Product";
import MainLayout from "./layouts/MainLayout";
import { FC } from "react";

const App: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route path="cart" element={<Cart />} />
        <Route path="sale" element={<Sale />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="ice-cream/:id" element={<Product />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
