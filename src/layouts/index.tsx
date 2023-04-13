import { Outlet } from "react-router-dom";

import { Footer, Navigation, Header } from "../components";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
