//composant "Loader"


//Import des feuilles de style
import "../../style/CSS/loader.css";


//function "Loader"

function Loader({loading}){


    return loading ? (
      <div className="loader">
        <div className="loader__spinner"></div>
        <div className="loader__text">Loading...</div>
      </div>
    ) : null;
}

export { Loader };