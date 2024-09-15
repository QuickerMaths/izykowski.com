import { NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50 shadow-md">
      <ul className="flex space-x-6 text-lg font-medium text-gray-700 justify-center py-4">
        <li>
          <NavLink
            to="/"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: 'none' }}
          >
            Strona Główna
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/o-mnie"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: 'none' }}
          >
            O Mnie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/galeria"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: 'none' }}
          >
            Galeria
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kalendarz"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: 'none' }}
          >
            Kalendarz
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/praca"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: 'none' }}
          >
            Usługi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kontakt"
            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: 'none' }}
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
