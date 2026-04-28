import Navbar from "../components/Header/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
