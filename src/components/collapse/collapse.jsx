// genere le composant collapse

//import useState
import {useState} from "react";

//import du contenu des composants "collapse" pour la page "A propos"
import {contentCollapse} from "../../data/textforcollapse/textforcollapse.js";

//import des feuille de style
import "../../style/CSS/collapse.css";

//import image
import chevronHaut from "../../asset/kasa-collapse-chevron-haut.png";
import chevronBas from "../../asset/kasa-collapse-chevron-bas.png";

function CollapseComponent({type, info_description, info_equipments}){

    const [display, setDisplay] = useState(true);
   
    let title = null;
    let content = null;
    let isList = false;

    if(type){

        title = contentCollapse[type]["title"];
        content = contentCollapse[type]["content"];
    }

    if(info_description){

        title = "description";
        content = info_description;
    }

    if(info_equipments){

      title = "equipments";
      content = info_equipments;
      isList = true;
      
      console.log(typeof content)
    }


    return (
      <div className="collapse">
        <div
          className="collapse__title"
          onClick={() => (display ? setDisplay(false) : setDisplay(true))}
        >
          {title}
          {display ? (
            <img src={chevronHaut} alt="fleche"></img>
          ) : (
            <img src={chevronBas} alt="fleche"></img>
          )}
        </div>

        {display ? (
          isList? ( <ul className="collapse__content--list">{content.map((gear)=>{return<li key={gear}>{gear}</li>})}</ul>)
          : (<div className="collapse__content">{content}</div>)
        ) : null}
      </div>
    );
    

  
}

export {CollapseComponent}