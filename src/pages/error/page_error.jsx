/******************************* Page "Error 404" *************************************
 *******************************************************************************/

//Import du module "LINK"
import { Link } from "react-router-dom";

//Import des feuilles de style
import "../../style/CSS/error.css";


//Fonction "PageError"
function PageError() {
  return (
    <div className="error">
      <p className="error__title">404</p>
      <p className="error__message">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="error__link" to="/">
        Retourner sur la page d' accueil
      </Link>
    </div>
  );
}

export { PageError };
