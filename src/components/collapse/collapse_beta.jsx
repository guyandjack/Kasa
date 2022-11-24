// Composant "Collapse_Beta"


//Import des images
import chevronHaut from "../../asset/kasa-collapse-chevron-haut.png";

//Import des feuille de style
import "../../style/CSS/collapse_beta.css";


//Fonction "CollapseComponentBeta"

function CollapseComponentBeta({ idSelect, title, content, isList }) {

  return (
    <div className="collapse-beta">
      <input
        id={idSelect}
        className="collapse-beta-input"
        type="checkbox"
        name={idSelect}
      ></input>

      <label htmlFor={idSelect} className="collapse-beta-label">
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
