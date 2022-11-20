// pages fiche logement

//Import du module "params"
import { useParams } from "react-router-dom";

//Import du module "redirect"
import { Navigate } from "react-router-dom";

//Import des fiches logement
import { logements } from "../../data/logements.js";

//Import des composants
import { Carrousel } from "../../components/carrousel/carrousel.jsx";
import { InfosLogement } from "../../components/infoslogement/infoslogement.jsx";
import { CollapseComponent } from "../../components/collapse/collapse.jsx";

//Import feuille de style
import "../../style/SASS/pages/logement/page_logement.scss";

function PageLogement() {
  const { _id } = useParams();

  let result = logements.find((logement) => logement.id === _id);

  return result ? (
    <div className="logement">
      <Carrousel slidepicture={result.pictures} />
      <InfosLogement info={result} />

      <div className="logement__collapse-container">
        <CollapseComponent
          className="collapse-logement"
          info_description={result.description}
        />
        <CollapseComponent
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
