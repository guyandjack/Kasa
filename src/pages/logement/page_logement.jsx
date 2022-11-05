// pages fiche logement

//import du module "params"
import {useParams} from "react-router-dom";

//import du module "redirect"
import { Navigate } from "react-router-dom";

//import des fiches logement
import {logements} from "../../data/logements.js";

//import des composants
import {Carroussel} from "../../components/carrousel/carroussel.jsx";
import {InfosLogement} from "../../components/infoslogement/infoslogement.jsx";
import {CollapseComponent} from "../../components/collapse/collapse.jsx";

//import feuille de style
import "../../style/SASS/pages/logement/page_logement.scss";

function PageLogement(){

    const {_id} = useParams();

    let result = logements.find((logement) => logement.id === _id);
     
     
    return result?(
      <div className="logement">

        <Carroussel slidepicture={result.pictures} />
        <InfosLogement info={result} />

        <div className="logement__collapse-container">
          <CollapseComponent className="collapse-logement" info_description={result.description} />
          <CollapseComponent className="collapse-logement" info_equipments={result.equipments} />
        </div>

      </div>
    ): <Navigate to="/*" />
}

export {PageLogement}