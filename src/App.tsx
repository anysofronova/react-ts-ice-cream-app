import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
