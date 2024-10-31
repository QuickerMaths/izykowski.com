import useDeviceSize from "@/hooks/useDeviceSize";
import Container from "./Container";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import { Button } from "./ui/button";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";

interface MenuProps {
    handleNavigation: (url: string) => void;
}

const Menu = ({ handleNavigation }: MenuProps) => {
    const [width] = useDeviceSize();
    return width > 768 ? (
        <DesktopMenu handleNavigation={handleNavigation} />
    ) : (
        <MobileMenu handleNavigation={handleNavigation} />
    );
};

const Header = () => {
    const [animate, setAnimate] = useState(false);
    const navigate = useNavigate();

    const handleNavigation = (url: string) => {
        setAnimate(true);
        setTimeout(() => {
            navigate(url);
            setAnimate(false);
        }, 1000);
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white z-50">
            {/* Overlay square animation */}
            <div
                className={`fixed top-[4rem] left-0 w-full h-[calc(100%-4rem)] bg-teal-500 transition-transform duration-1000 ${animate ? "translate-x-0 z-[9998]" : "translate-x-full"
                    }`}
            ></div>

            <Container className="flex items-center justify-end md:justify-between py-4 px-6 from-gray-100 rounded-md z-[9999]">
                <Menu handleNavigation={handleNavigation} />
            </Container>
        </header>
    );
};

const MobileMenu = ({ handleNavigation }: MenuProps) => {
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
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(false);
                                    handleNavigation("/");
                                }}
                                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                            >
                                Strona Główna
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/o-mnie"
                                style={{ textDecoration: "none" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(false);
                                    handleNavigation("/o-mnie");
                                }}
                                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                            >
                                O Mnie
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/aktualności"
                                style={{ textDecoration: "none" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(false);
                                    handleNavigation("/aktualności");
                                }}
                                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                            >
                                Aktualności
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/galeria"
                                style={{ textDecoration: "none" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(false);
                                    handleNavigation("/galeria");
                                }}
                                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                            >
                                Galeria
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/kalendarz"
                                style={{ textDecoration: "none" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(false);
                                    handleNavigation("/kalendarz");
                                }}
                                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                            >
                                Kalendarz
                            </NavLink>
                        </li>
                        {/*<li>*/}
                        {/*    <NavLink*/}
                        {/*        to="/Znieczulenia"*/}
                        {/*        style={{ textDecoration: "none" }}*/}
                        {/*        onClick={(e) => {*/}
                        {/*            e.preventDefault();*/}
                        {/*            setOpen(false);*/}
                        {/*            handleNavigation("/Znieczulenia");*/}
                        {/*        }}*/}
                        {/*        className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"*/}
                        {/*    >*/}
                        {/*        Znieczulenia*/}
                        {/*    </NavLink>*/}
                        {/*</li>*/}
                        <li>
                            <NavLink
                                to="/dzialanosc"
                                style={{ textDecoration: "none" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(false);
                                    handleNavigation("/dzialanosc");
                                }}
                                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                            >
                                Działaność
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/kontakt"
                                style={{ textDecoration: "none" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpen(false);
                                    handleNavigation("/kontakt");
                                }}
                                className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
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

const DesktopMenu = ({ handleNavigation }: MenuProps) => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
            <ul className="flex space-x-6 text-lg font-medium text-gray-700 justify-center py-4">
                <li>
                    <NavLink
                        to="/"
                        style={{ textDecoration: "none" }}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/");
                        }}
                        className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                    >
                        Strona Główna
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/o-mnie"
                        style={{ textDecoration: "none" }}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/o-mnie");
                        }}
                        className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                    >
                        O Mnie
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/aktualności"
                        style={{ textDecoration: "none" }}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/aktualności");
                        }}
                        className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                    >
                        Aktualności
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/galeria"
                        style={{ textDecoration: "none" }}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/galeria");
                        }}
                        className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                    >
                        Galeria
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/kalendarz"
                        style={{ textDecoration: "none" }}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/kalendarz");
                        }}
                        className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                    >
                        Kalendarz
                    </NavLink>
                </li>
                {/*<li>*/}
                {/*    <NavLink*/}
                {/*        to="/Znieczulenia"*/}
                {/*        style={{ textDecoration: "none" }}*/}
                {/*        onClick={(e) => {*/}
                {/*            e.preventDefault();*/}
                {/*            handleNavigation("/Znieczulenia");*/}
                {/*        }}*/}
                {/*        className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"*/}
                {/*    >*/}
                {/*        Znieczulenia*/}
                {/*    </NavLink>*/}
                {/*</li>*/}
                <li>
                    <NavLink
                        to="/dzialanosc"
                        style={{ textDecoration: "none" }}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/dzialanosc");
                        }}
                        className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                    >
                        Działaność
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/kontakt"
                        style={{ textDecoration: "none" }}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigation("/kontakt");
                        }}
                        className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
                    >
                        Kontakt
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
