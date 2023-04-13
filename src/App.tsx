import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { MainLayout } from "./layouts";
import { Home, NotFound, Product, Cart, Sale, About, Contact } from "./pages";

export const App: FC = () => {
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
