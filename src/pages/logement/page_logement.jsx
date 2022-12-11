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
import { Collapse } from "../../components/collapse/collapse.jsx";

//Import feuille de style
import "../../style/SASS/pages/logement/page_logement.scss";


//Fonction "PageLogement"

function PageLogement() {
  
  const { _id } = useParams();

  let result = logements.find((logement) => logement.id === _id);

  let heightSize = "150px"

  return result ? (
    <div className="logement">
      <Carrousel slidepicture={result.pictures} />
      <InfosLogement info={result} />

      <div className="logement__collapse-container">
        <Collapse
          className="collapse-logement"
          idSelect="description"
          title="Description"
          content={result.description}
          isList={false}
          height={heightSize}
        />
        <Collapse
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
