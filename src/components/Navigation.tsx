import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/o-mnie">About</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
