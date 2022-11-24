/******************************* Page "A propos" *************************************
 *******************************************************************************/

//Import du contenu des composants "collapse" pour la page "A propos"
import { contentCollapse } from "../../data/textforcollapse/textforcollapse.js";

//Import des composants enfants

import { Banner } from "../../components/banner/banner.jsx";
import { CollapseComponentBeta } from "../../components/collapse/collapse_beta.jsx";

//Import des feuilles de style
import "../../style/CSS/apropos.css";

//Fonction "PageApropos"

function PageApropos() {
  return (
    <div className="apropos">
      
      <Banner pagename="apropos" text="" height="223px" />
      {contentCollapse.map((element) => {
        return (
          <CollapseComponentBeta
            key={element.title}
            idSelect={element.title}
            title={element.title}
            content={element.content}
            isList={false}
          />
        );
      })}
          
    </div>
  );
}

export { PageApropos };
