import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export default function RootLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
        <ScrollToTop/>
      </div>
      <Footer />
    </div>
  );
}
