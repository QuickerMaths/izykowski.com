import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header";
import Spinner from "./Spinner";
import Footer from "./Footer.tsx"
const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner className="w-[100px] h-[100px]" />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default Layout;
