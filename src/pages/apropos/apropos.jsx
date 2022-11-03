//genere la page "A propos"

//import des composants
import React from "react";
import {Banner} from "../../components/banner/banner.jsx";
import {CollapseComponent} from "../../components/collapse/collapse.jsx";
import {Footer} from "../../components/footer/footer.jsx";

//import feuille de style
import "../../style/SASS/pages/apropos/apropos.scss";



function Apropos(){

    return (
    <React.Fragment>
      <div className="apropos">
        
        <Banner
          pagename="apropos"
          text=""
          hight="258px"
           
        />
        <CollapseComponent type="fiabilite" />
        <CollapseComponent type="respect" />
        <CollapseComponent type="service" />
        <CollapseComponent type="securite" />
      </div>
      <Footer />
    </React.Fragment>
    );
}

export {Apropos}