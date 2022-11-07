// composant "Header"

//Import du module "link"
import { Link } from "react-router-dom";

//Import de logo
import logo from "../../asset/logo-kasa-header.png";

//Import feuille de style
import "../../style/SASS/components/header/header.scss";

function Header() {
  return (
    <header>
      <nav className="header">
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__logo__img"
              src={logo}
              alt="logo de l' agence Casa"
            ></img>
          </Link>
        </div>

        <ul className="header__nav">
          <li>
            <Link className="header__nav__li" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link className="header__nav__li" to="/apropos">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
