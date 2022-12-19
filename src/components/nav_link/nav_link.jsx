//Composant "NavLink"
import { Link, useLocation } from "react-router-dom";

//Import des feuilles de style
import "../../style/CSS/navlink.css";


function NavLink({ uri, children }) {

    let location = useLocation();
    let classlist = "header__nav__li";

    if (uri === location.pathname) {
        classlist = classlist + " actif";
    }
    else {
        classlist = classlist + " no-actif";
    }
    
    return( 
    <Link className={classlist} to={uri}>
      {children}
    </Link>
    )

}

export {NavLink}