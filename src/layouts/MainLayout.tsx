import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
