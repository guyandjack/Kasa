//genere la page "error 404"

//import du module "LINK"
import {Link} from "react-router-dom";

//import des feuilles de style
import "../../style/CSS/error.css";


function PageError(){
 return (
   <div className="error">
     <p className="error__title">404</p>
     <p className="error__message">Oups! La page que vous demandez n'existe pas.</p>
     <Link className="error__link" to="/">Retourner sur la page d' accueil</Link>
     
   </div>
 );
}

export {PageError}