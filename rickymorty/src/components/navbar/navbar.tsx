import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbarcontainer">
      <div className="navbarizq">
        <Link to="/">
          <img src="logo.png" alt="Logo RickyMorty" />
        </Link>
      </div>
      <ul className="navbarder">
        <li>
          <Link to="/">INICIO</Link>
        </li>
        <li>
          <Link to="/">PERSONAJES</Link>
        </li>
        <li>
          <Link to="/">EPISODIOS</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
