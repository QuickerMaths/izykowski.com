import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-6 text-lg font-medium text-gray-700">
        <li>
          <NavLink

            to="/"

            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r "
            style={{ textDecoration: 'none' }}  // Usunięcie podkreślenia
          >
            Strona Główna
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/o-mnie"

            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r"
            style={{ textDecoration: 'none' }}  // Usunięcie podkreślenia
          >
            O Mnie
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/galeria"

            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r "
            style={{ textDecoration: 'none' }}  // Usunięcie podkreślenia
          >
            Galeria
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kalendarz"

            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r "
            style={{ textDecoration: 'none' }}  // Usunięcie podkreślenia
          >
            Kalendarz
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/praca"

            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r "
            style={{ textDecoration: 'none' }}  // Usunięcie podkreślenia
          >
            Usługi
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kontakt"

            className="px-4 py-2 hover:text-teal-500 transition duration-300 border-l border-r "
            style={{ textDecoration: 'none' }}  // Usunięcie podkreślenia
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
