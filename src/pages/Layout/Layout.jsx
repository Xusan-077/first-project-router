import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Layout() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        onClick={scrollToTop}
        className={`${
          scroll >= 900 ? "bottom-5" : "-bottom-30"
        } transition-all fixed right-5 text-white cursor-pointer bg-[#FFA155] rounded-full text-center w-[65px] p-[10px_0]`}
      >
        <i className="bi bi-arrow-up text-[30px]"></i>
      </div>

      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
