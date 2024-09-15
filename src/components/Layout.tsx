import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header";
import Spinner from "./Spinner";
import Footer from "./Footer.tsx";

const Layout = () => {
  return (
    <>
      <Header />
      {/* Główna zawartość strony z paddingiem od góry */}
      <div className="pt-16">
        <Suspense fallback={<Spinner className="w-[100px] h-[100px]" />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
