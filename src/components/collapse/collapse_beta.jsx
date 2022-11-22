// Composant "Collapse_Beta"


//Import du contenu des composants "collapse" pour la page "A propos"
import { contentCollapse } from "../../data/textforcollapse/textforcollapse.js";

//Import des feuille de style
import "../../style/CSS/collapse_beta.css";

//Import des images
import chevronHaut from "../../asset/kasa-collapse-chevron-haut.png";



//Fonction "ClollapseComponentBeta"

function CollapseComponentBeta({ idselect, type, info_description, info_equipments }) {

  
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
    
   // console.log(display);

  return (
    <div className="collapse-beta">
      <input
        id={idselect}
        className="collapse-beta-input"
        type="checkbox"
        name={idselect}
      ></input>

      <label for={idselect} className="collapse-beta-label">
        <span className="collapse-beta-title">
          {title}
          <img src={chevronHaut} alt="afficher le contenu"></img>
        </span>

        {isList ? (
          <ul className="collapse-beta-content">
            {content.map((gear) => {
              return <li key={gear}>{gear}</li>;
            })}
          </ul>
        ) : (
          <span className="collapse-beta-content">{content}</span>
        )}
      </label>
    </div>
  );
}

export { CollapseComponentBeta };
