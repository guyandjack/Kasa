// composant "footer"

//Import du module "Link"
import { Link } from "react-router-dom";

//Import du logo "kasa-footer"
import logo from "../../asset/logo-kasa-footer.png";

//Import feuille de style
import "../../style/CSS/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">
        <img
          className="footer__link__img"
          src={logo}
          alt="logo de l' agenec kasa"
        ></img>
      </Link>
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export { Footer };
