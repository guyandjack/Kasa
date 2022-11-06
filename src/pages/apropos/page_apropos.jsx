/******************************* Page "A propos"*************************************
 *******************************************************************************/

//Import des composants enfants

import { Banner } from "../../components/banner/banner.jsx";
import { CollapseComponent } from "../../components/collapse/collapse.jsx";

//Import feuille de style
import "../../style/CSS/apropos.css";

//Fonction "PageApropos"

function PageApropos() {
  return (
    <div className="apropos">
      <Banner pagename="apropos" text="" height="223px" />
      <CollapseComponent type="fiabilite" />
      <CollapseComponent type="respect" />
      <CollapseComponent type="service" />
      <CollapseComponent type="securite" />
    </div>
  );
}

export { PageApropos };
