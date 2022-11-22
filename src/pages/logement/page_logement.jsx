/******************************* Page "logement" *************************************
 *******************************************************************************/

//Import du module "params"
import { useParams } from "react-router-dom";

//Import du module "navigate"
import { Navigate } from "react-router-dom";

//Import des fiches logement
import { logements } from "../../data/logements.js";

//Import des composants enfants
import { Carrousel } from "../../components/carrousel/carrousel.jsx";
import { InfosLogement } from "../../components/infoslogement/infoslogement.jsx";
import { CollapseComponentBeta } from "../../components/collapse/collapse_beta.jsx";

//Import feuille de style
import "../../style/SASS/pages/logement/page_logement.scss";


//Fonction "PageLogement"

function PageLogement() {
  
  const { _id } = useParams();

  let result = logements.find((logement) => logement.id === _id);

  return result ? (
    <div className="logement">
      <Carrousel slidepicture={result.pictures} />
      <InfosLogement info={result} />

      <div className="logement__collapse-container">
        <CollapseComponentBeta
          idselect="1"
          className="collapse-logement"
          info_description={result.description}
        />
        <CollapseComponentBeta
          idselect="2"
          className="collapse-logement"
          info_equipments={result.equipments}
        />
      </div>
    </div>
  ) : (
    <Navigate to="/*" />
  );
}

export { PageLogement };
