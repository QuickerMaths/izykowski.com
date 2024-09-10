import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header";
import Spinner from "./Spinner";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner className="w-[100px] h-[100px]" />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
