// genere le composant collapse

//import useState
import {useState} from "react";

//import du contenu des composants "collapse"
import {contentCollapse} from "../../data/textforcollapse/textforcollapse.js";

//import des feuille de style
import "../../style/CSS/collapse.css";

//import image
import chevronHaut from "../../asset/kasa-collapse-chevron-haut.png";
import chevronBas from "../../asset/kasa-collapse-chevron-bas.png";

function CollapseComponent({type}){

    const [display, setDisplay] = useState(true);
   
    const title = contentCollapse[type]["title"];
    const content = contentCollapse[type]["content"];

    return (
      <ul className="collapse">
        <li
          className="collapse__title"
          onClick={() => (display ? setDisplay(false) : setDisplay(true))}
        > 
        {title}
        {display? <img src={chevronHaut} alt="fleche"></img> : <img src={chevronBas} alt="fleche"></img>}
        </li>
        
        {display ? <li className="collapse__content">{content}</li> : null}
      </ul>
    );

    

   
}

export {CollapseComponent}