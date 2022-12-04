/******************************* Page "logement" *************************************
 *******************************************************************************/

//Import du module "params"
import { useParams } from "react-router-dom";

//Import du module "navigate"
import { Navigate } from "react-router-dom";

//Import des fiches logement
import { logements } from "../../data/logements.js";

//Import des composants enfants
import { CarrouselBeta } from "../../components/carrousel/carrousel_beta.jsx";
import { InfosLogement } from "../../components/infoslogement/infoslogement.jsx";
import { CollapseComponentBeta } from "../../components/collapse/collapse_beta.jsx";

//Import feuille de style
import "../../style/SASS/pages/logement/page_logement.scss";


//Fonction "PageLogement"

function PageLogement() {
  
  const { _id } = useParams();

  let result = logements.find((logement) => logement.id === _id);

  let heightSize = "150px"

  return result ? (
    <div className="logement">
      <CarrouselBeta slidepicture={result.pictures} />
      <InfosLogement info={result} />

      <div className="logement__collapse-container">
        <CollapseComponentBeta
          className="collapse-logement"
          idSelect="description"
          title="Description"
          content={result.description}
          isList={false}
          height={heightSize}
        />
        <CollapseComponentBeta
          className="collapse-logement"
          idSelect="equipements"
          title="Equipements"
          content={result.equipments}
          isList={true}
          height={heightSize}
        />
      </div>
    </div>
  ) : (
    <Navigate to="/*" />
  );
}

export { PageLogement };
