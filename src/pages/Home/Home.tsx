import React from "react";
import Products from "../../components/Products/Products";

const Home = (props: JSX.IntrinsicAttributes & { searchValue: any }) => {
  return <Products {...props} />;
};

export default Home;
