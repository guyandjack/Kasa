//genere la page "A propos"

import {useState, useEffect} from "react"

//import des composants
import {Banner} from "../../components/banner/banner.jsx";



function Apropos(){

    
    return (
      <div className="apropos">
        
        <Banner
          pagename="apropos"
          text=""
           
        />
      </div>
    );
}

export {Apropos}