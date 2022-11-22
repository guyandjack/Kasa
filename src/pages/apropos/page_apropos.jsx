/******************************* Page "A propos" *************************************
 *******************************************************************************/

//Import des composants enfants

import { Banner } from "../../components/banner/banner.jsx";
import { CollapseComponentBeta } from "../../components/collapse/collapse_beta.jsx";

//Import feuille de style
import "../../style/CSS/apropos.css";

//Fonction "PageApropos"

function PageApropos() {
  return (
    <div className="apropos">
      <Banner pagename="apropos" text="" height="223px" />
      <CollapseComponentBeta idselect="1" type="fiabilite" />
      <CollapseComponentBeta idselect="2" type="respect" />
      <CollapseComponentBeta idselect="3" type="service" />
      <CollapseComponentBeta idselect="4" type="securite" />
    </div>
  );
}

export { PageApropos };
