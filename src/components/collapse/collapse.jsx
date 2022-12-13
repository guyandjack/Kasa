// Composant "Collapse"


//Import des images
import chevronHaut from "../../asset/kasa-collapse-chevron-haut.png";

//Import des feuille de style
import "../../style/CSS/collapse.css";


//Fonction "Collapse"

function Collapse({ idSelect, title, content, isList }) {

  return (
    <div className="collapse">
      <input
        id={idSelect}
        className="collapse-input"
        type="checkbox"
        name={idSelect}
      ></input>

      <label htmlFor={idSelect} className="collapse-label">
        
        <span className="collapse-title">
          {title}
          <img src={chevronHaut} alt="afficher ou cacher le contenu"></img>
        </span>
        
          {isList ? (
            <ul className="collapse-content">
              {content.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          ) : (
            <span className="collapse-content">{content}</span>
          )}
        
      </label>
    </div>
  );
}

export { Collapse };
