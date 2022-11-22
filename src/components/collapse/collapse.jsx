// Composant "Collapse"

//import des hook
import {useState} from "react";

//Import du contenu des composants "collapse" pour la page "A propos"
import { contentCollapse } from "../../data/textforcollapse/textforcollapse.js";

//Import des feuille de style
import "../../style/CSS/collapse.css";

//Import image
import chevronHaut from "../../asset/kasa-collapse-chevron-haut.png";
import chevronBas from "../../asset/kasa-collapse-chevron-bas.png";

function CollapseComponent({ type, info_description, info_equipments }) {

  const [display, setDisplay] = useState(false)
 
  function click(){

    (display ? setDisplay(false) : (setDisplay(true)))
  }

 
  let title = null;
  let content = null;
  let isList = false;

  if (type) {
    title = contentCollapse[type]["title"];
    content = contentCollapse[type]["content"];
  }

  if (info_description) {
    title = "description";
    content = info_description;
  }

  if (info_equipments) {
    title = "equipments";
    content = info_equipments;
    isList = true;

  }

  

  return (
    <div className="collapse">
      <div
        id="collapseTitle"
        className="collapse__title"
        onClick = {()=> click()}
      >
        {title}
        {display ? (
          <img src={chevronHaut} alt="fleche pour cacher contenu"></img>
        ) : (
          <img src={chevronBas} alt="fleche pour afficher contenu"></img>
        )}
      </div>

      {display ? (

        isList ? (
          <ul className="collapse__content--list open">
            {content.map((gear) => {
              return <li key={gear}>{gear}</li>;
            })}
          </ul>
        ) : (
          <div className="collapse__content open">{content}</div>
        )

      ) : 

      isList ? (
          <ul className="collapse__content--list close">
            {content.map((gear) => {
              return <li key={gear}>{gear}</li>;
            })}
          </ul>
        ) : (
          <div className="collapse__content close">{content}</div>
        )
       }
    </div>
  );
}

export { CollapseComponent };
