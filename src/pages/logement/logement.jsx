// pages fiche logement

//import du module "params"
import {useParams} from "react-router-dom";

//import des fiches logement
import {logements} from "../../data/logements.js";

//import des composants
import {Carroussel} from "../../components/carrousel/carroussel.jsx"

//import feuille de style
import "../../style/SASS/pages/logement/logement.scss";

function Logement(){

    const {_id} = useParams();

    let result = logements.find((logement) => logement.id === _id);
   

    return(
        <div className="logement">
            
            <Carroussel slidepicture={result.pictures}/>

        </div>
    )
}

export {Logement}