// composant "carroussel"

//Import des differents modules
import { useState, useEffect } from "react";
import styled from "styled-components";


//Import des composants enfants
import {Loader} from "../loader/loader.jsx";

//Import de fonctions
import {preLoad} from "../../utils/fonction/preload.js";

//Import des images
import flecheDroite from "../../asset/kasa-chevron-droite-slider.svg";
import flecheGauche from "../../asset/kasa-chevron-gauche-slider.svg";

//Import des feuilles de style
import "../../style/CSS/carroussel.css";

const DivSlider = styled.div`
  
  background-image: url(${({ img }) => img});

`;

function Carroussel({ slidepicture }) {

  const [increment, setIncrement] = useState(0);
  const [loading, setLoading] = useState(false);
  const [className, setClassName] = useState("carroussel");

  //Prechargement des images, necessaires au carroussel.
    let preLoadedPicture = preLoad(slidepicture);
    

  //Affiche les fleches de défilements si il y a plusieurs images
  let displayChevron = preLoadedPicture.length <= 1 ? false : true;

  //Recupere l' image pour le carroussel suite à un click "gauche"
  function clickLeft() {

    async function changeClassName(){
      
      setClassName("carroussel slideFromLeft");
    }
   
    changeClassName()

      .then(()=>{

        if (increment > 0) {
          let newIndex = increment - 1;
          setIncrement(newIndex);
        }
  
        if (increment < 1) {
          let newIndex = preLoadedPicture.length - 1;
          setIncrement(newIndex);
        }

      })

      /*.then(()=>{
        setClassName("carroussel");
      })*/

      .catch((e)=>{console.log(e)})
    
    

    
  }

  //Recupere l' image pour le carroussel suite à un click "droit"
  function clickRight() {

    async function changeClassName(){

      setClassName("carroussel slideFromRight");
    }

    changeClassName()
      .then(()=>{ 

        if (increment < preLoadedPicture.length - 1) {
        let newIndex = increment + 1;
        setIncrement(newIndex);
      }
    
      if (increment >= preLoadedPicture.length - 1) {
        let newIndex = 0;
        setIncrement(newIndex);
      }})

      .catch((e)=>{console.log(e)})
     
   
  }

  return (
    <DivSlider
      
      className={className}
      img={preLoadedPicture[increment]}
    >
      {displayChevron ? (
        <div className="carroussel__container-chevron">
          <div className="chevron" value="left" onClick={() => clickLeft()}>
            <img src={flecheGauche} alt="fleche defilement à gauche"></img>
          </div>

          {loading ? <Loader /> : null}

          <div className="chevron" value="right" onClick={() => clickRight()}>
            <img src={flecheDroite} alt="fleche defilement à droite"></img>
          </div>
        </div>
      ) : null}

      <p className="carroussel__compteur">
        {increment + 1} / {preLoadedPicture.length}
      </p>
    </DivSlider>
  );
}

export { Carroussel };
