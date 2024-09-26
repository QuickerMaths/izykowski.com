import useDeviceSize from "@/hooks/useDeviceSize";
import Container from "./Container";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [width] = useDeviceSize();

  return width > 768 ? <DesktopMenu /> : <MobileMenu />;
};

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-l-2 border-r-2 z-50">
      <Container className="flex items- justify-end md:justify-between py-4 px-6 from-gray-100 rounded-md">
        <Menu />
      </Container>
    </header>
  );
};

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <RxHamburgerMenu />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="flex items-center justify-center">
        <nav className="flex items-center justify-center h-screen w-full bg-white shadow-md">
          <ul className="flex flex-col justify-center space-y-6 text-lg font-medium text-gray-700 items-center">
            <li>
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(false)}
                className={
                  "px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r group-[.active]:underline"
                }
              >
                Strona Główna
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/o-mnie"
                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                O Mnie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aktualności"
                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                Aktualności
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/galeria"
                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                Galeria
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kalendarz"
                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                Kalendarz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Znieczulenia"
                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                Znieczulenia
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/kontakt"
                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(false)}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

const DesktopMenu = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <ul className="flex space-x-6 text-lg font-medium text-gray-700 justify-center py-4">
        <li>
          <NavLink
            to="/"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: "none" }}
          >
            Strona Główna
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/o-mnie"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: "none" }}
          >
            O Mnie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/aktualności"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: "none" }}
          >
            Aktualności
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/galeria"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: "none" }}
          >
            Galeria
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kalendarz"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: "none" }}
          >
            Kalendarz
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Znieczulenia"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: "none" }}
          >
            Znieczulenia
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kontakt"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: "none" }}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
