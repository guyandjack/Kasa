// composant "Header"

//Import du module "link"
import { Link } from "react-router-dom";

//Import de logo
import logo from "../../asset/logo-kasa-header.png";

import { useLocation } from 'react-router-dom';

//Import composants enfants
import { NavLink } from "../nav_link/nav_link.jsx";


  

//Import feuille de style
import "../../style/SASS/components/header/header.scss";

function Header() {

  let location = useLocation();
  console.log(location)
  return (
    <header>
      <nav className="header">
        <div className="header__logo">
          <Link to="/">
            <img
              className="header__logo__img"
              src={logo}
              alt="logo de l'agence Kasa"
            ></img>
          </Link>
        </div>

        <ul className="header__nav">
          <li>
            <NavLink uri="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink uri="/apropos">
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export { Header };
