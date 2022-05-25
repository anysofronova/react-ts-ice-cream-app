import "./App.css";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Products />
    </div>
  );
}

export default App;
