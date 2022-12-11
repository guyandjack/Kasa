// composant "Carrousel"

//Import des differents modules
import { useState, useEffect, React } from "react";


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





//Fonction "CarrouselBeta"

function Carrousel({ slidepicture }) {

    //Defini l'index de l'image à afficher  
    const [increment, setIncrement] = useState(0);
    
    //Applique la class correspondante pour l' animation du carrousel
    const [className, setClassName] = useState("");
    
    //Indique si les images du carrousel sont en train de chargee dans le cash
    const [isLoading, setIsLoading] = useState(true);

    //Mise à jour du tableau contenant les images à affichées pour le carroussel
    const [preLoadedPicture, setPreLoadedPicture] = useState([]);

    // Determine si les images sont en train de chargées
    useEffect(() => {
        if (preLoadedPicture.length > 0) {
        setIsLoading(false);
        }
    }, [preLoadedPicture]);

    //Variable et constante de fonctionnement
    let displayChevron = false;
    
    //Prechargement des images, necessaires au carrousel.
       
    if(preLoadedPicture.length === 0) {
      //evite le rechargement des images lors du re-render produit par le useEffect
      let pictures = preLoad(slidepicture);
      pictures
        .then((result) => {
          console.log(result)
          setPreLoadedPicture(result);
        })
        
    }
   
    
  //Affichage conditionnel des fleches de défilement 
   if (preLoadedPicture.length >= 1) {
        displayChevron = true;
    }  
    

  //Recupere l' image pour le carrousel suite à un click "gauche"
  function clickLeft() {
    async function changeClassName() {
      setClassName(" slideFromLeft");
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

      // todo: refacto pour animation
      //temporisation permetent d' effectuer l' animation css du carrousel
      .then(() => {
        setTimeout(function () {
          setClassName("");
        }, 300);
      })

      .catch((e) => {
        console.log(e);
      });
  }

  //Recupere l'image pour le carrousel suite à un click "droit"
  function clickRight() {
    async function changeClassName() {
      setClassName(" slideFromRight");
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
      //temporisation permetent d' effectuer l' animation css du carrousel
      .then(() => {
        setTimeout(function () {
          setClassName("");
        }, 300);
      })

      .catch((e) => {
        console.log(e);
      });
  }

    return (
      <div className="carrousel">
        <div className={className}>
          {preLoadedPicture[increment]}
          {displayChevron ? (
            <div className="carrousel__container-chevron">
              <div className="chevron" value="left" onClick={() => clickLeft()}>
                <img src={flecheGauche} alt="fleche defilement à gauche"></img>
              </div>

              <div
                className="chevron"
                value="right"
                onClick={() => clickRight()}
              >
                <img src={flecheDroite} alt="fleche defilement à droite"></img>
              </div>
            </div>
          ) : null}
          <Loader className="carrousel__loader" loading={isLoading} />
        </div>

        {preLoadedPicture.length > 0 ? (
          <BulletPoint
            className="carrousel__bulletpoint"
            count={increment}
            countTotal={preLoadedPicture.length - 1}
            setindex={setIncrement}
          />
        ) : null}
      </div>
    );
}

export { Carrousel };
