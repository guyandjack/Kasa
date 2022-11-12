//composant "loader"

import "../../style/CSS/loader.css";


//function "Loader"

function Loader(){

    return(
        <div className="loader">
            <div className="loader__spinner"></div>
            <span className="loader__text">Loading...</span>
        </div>
    )
}

export { Loader };