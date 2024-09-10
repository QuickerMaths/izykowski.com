import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/o-mnie">About</NavLink>
          </li>
          <li>
            <NavLink to="/galeria">Galeria</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
