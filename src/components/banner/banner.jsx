// composant "banner"

//import de useState
import  { useState } from "react";

//importation des url des images pour les différents banner et taille d'ecran
import { urlImgBanner } from "../../data/imgbanner/imgbanner.js";


//import feuille de style
import "../../style/SASS/components/banner/banner.scss";


function Banner({ pagename, text }) {

  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

    
  function selectSourceImageAndSize() {
    
    let data = {
      nameOfPage: pagename,
      title: text,
    };

    
    if (sizeScreen >= 0 && sizeScreen <= 768) {

        data.displaySize = "medium" 
    }

    if (sizeScreen >= 769 && sizeScreen <= 992) {

        data.displaySize = "large"; 
    }

    if (sizeScreen >= 993 && sizeScreen <= 1500) {

        data.displaySize = "xlarge"; 
    }

    if (sizeScreen >= 1501) {

        data.displaySize = "xxlarge"; 
    }

    return data

  }

  let sourceImage = selectSourceImageAndSize();
  let imgUrl = urlImgBanner[sourceImage["nameOfPage"]][sourceImage["displaySize"]];

  window.addEventListener("resize", ()=>setSizeScreen(window.innerWidth));

  return (
    <div className="banniere">
      <img className="banniere__img" src={imgUrl} alt="paysage"></img>
      <p className="banniere__text">{sourceImage["title"]}</p>
    </div>
  );
}

export {Banner}