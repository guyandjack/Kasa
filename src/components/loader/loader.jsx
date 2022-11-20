//composant "loader"

//Import des "hook"
import {useState, useEffect} from "react";


//Import des feuilles de style
import "../../style/CSS/loader.css";


//function "Loader"

function Loader({loading}){

    const[ isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        function hide(){ setIsLoading(false)
        console.log("le state 'isLoading' du loader est à: " + isLoading)
    }
    setTimeout(hide, 3000);
       
    },[loading]);

    console.log("la props 'loading' du loader est à: " + loading)

    return isLoading ? (
      <div className="loader">
        <div className="loader__spinner"></div>
        <div className="loader__text">Loading...</div>
      </div>
    ) : null;
}

export { Loader };