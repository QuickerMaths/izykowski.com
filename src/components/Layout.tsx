import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Header from "./Header";
import Spinner from "./Spinner";
import Footer from "./Footer.tsx";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Główna zawartość strony z paddingiem od góry */}
      <main className="flex-grow pt-16">
        <Suspense fallback={<Spinner className="w-[100px] h-[100px]" />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
