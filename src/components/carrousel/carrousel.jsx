// composant "Carrousel"

//Import des differents modules
import { useState, useEffect, React} from "react";
import styled from "styled-components";

//Import des composants enfants
import { Loader } from "../loader/loader.jsx";
import { BulletPoint } from "../bulletpoint/bulletpoint.jsx";

//Import de fonctions
import { preLoad } from "../../utils/fonction/preload.js";

//Import des images
import flecheDroite from "../../asset/kasa-chevron-droite-slider.svg";
import flecheGauche from "../../asset/kasa-chevron-gauche-slider.svg";

//Import des feuilles de style
import "../../style/CSS/carrousel.css";

const DivSlider = styled.div`
  background-image: url(${({ img }) => img});
`;


//Fonction "Carrousel"
function Carrousel({ slidepicture }) {


  const [increment, setIncrement] = useState(0);

  const [className, setClassName] = useState("carrousel");

  const [isLoading, setIsLoading] = useState(true);

  const [preLoadedPicture, setPreLoadedPicture] = useState([]);
  
  useEffect(() => {

    if (preLoadedPicture.length > 0) {
      setIsLoading(false)
    }
    
  }, [preLoadedPicture]);

  //Prechargement des images, necessaires au carrousel.

  //Precharge les images
  
  if (preLoadedPicture.length < 1) { //evite le rechargement des images lors du re-render produit par le useEffect
    let imgPreloaded = preLoad(slidepicture);
    setPreLoadedPicture(imgPreloaded);
  }

     
  //Affiche les fleches de défilements si il y a plusieurs images
  let displayChevron = preLoadedPicture.length <= 1 ? false : true;

  //Recupere l' image pour le carrousel suite à un click "gauche"
  function clickLeft() {
    async function changeClassName() {
      setClassName("carrousel slideFromLeft");
    }

    changeClassName()
      .then(() => {
        if (increment > 0) {
          let newIndex = increment - 1;
          setIncrement(newIndex);
        }

        if (increment < 1) {
          let newIndex = preLoadedPicture.length - 1;
          setIncrement(newIndex);
        }
      })

      .then(() => {
        setTimeout(function () {
          setClassName("carrousel");
        }, 300);
      })

      .catch((e) => {
        console.log(e);
      });
  }

  //Recupere l'image pour le carrousel suite à un click "droit"
  function clickRight() {
    async function changeClassName() {
      setClassName("carrousel slideFromRight");
    }

    changeClassName()
      .then(() => {
        if (increment < preLoadedPicture.length - 1) {
          let newIndex = increment + 1;
          setIncrement(newIndex);
        }

        if (increment >= preLoadedPicture.length - 1) {
          let newIndex = 0;
          setIncrement(newIndex);
        }
      })

      // todo: refacto pour animation
      //temporisation permetent d' effectuer l' animation css de slide
      .then(() => {
        setTimeout(function () {
          setClassName("carrousel");
        }, 300);
      })

      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <DivSlider className={className} img={preLoadedPicture[increment]}>
      
      {displayChevron ? (
        <div className="carrousel__container-chevron">
          <div className="chevron" value="left" onClick={() => clickLeft()}>
            <img src={flecheGauche} alt="fleche defilement à gauche"></img>
          </div>

          <div className="chevron" value="right" onClick={() => clickRight()}>
            <img src={flecheDroite} alt="fleche defilement à droite"></img>
          </div>
        </div>
      ) : null}
      <Loader className="carrousel__loader" loading={isLoading} />

      {preLoadedPicture.length > 0 ? (
        <BulletPoint
          className="carrousel__bulletpoint"
          count={increment}
          countTotal={preLoadedPicture.length - 1}
          setindex={setIncrement}
        />
      ) : null}
    </DivSlider>
  );
}

export { Carrousel };
