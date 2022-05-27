import { Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  // @ts-ignore
  return (
    <div className="App">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home searchValue={searchValue} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
