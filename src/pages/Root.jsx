import Navbar from "../components/NavBar";
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
