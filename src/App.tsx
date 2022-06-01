import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Sale from "./pages/Sale/Sale";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
