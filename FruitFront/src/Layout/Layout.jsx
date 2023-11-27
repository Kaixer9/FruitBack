import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";


function Root() {
  return (
    <div id="layout">
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
}

export default Root;