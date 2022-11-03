// composant "carroussel"

//import des differents modules
import { useState } from "react";
import styled from "styled-components";

//import des images
import flecheDroite from "../../asset/kasa-chevron-droite-slider.png";
import flecheGauche from "../../asset/kasa-chevron-gauche-slider.png";

//import des feuilles de style
import "../../style/CSS/carroussel.css";

const DivSlider = styled.div`
  width: 80%;
  height: 400px;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: url(${({ img }) => img});

  animation-name: ${({way}) => way};
  animation-duration: 0.5s;
  animation-timing-function: linear;

`;

function Carroussel({slidepicture}){

    
    const [increment, setIncrement] = useState(0);

    function clickLeft(){


        if (increment > 0 ) {
          let newIndex = increment - 1;
          setIncrement(newIndex);
        }

        if (increment < 1) {
          let newIndex =( (slidepicture.length) - 1);
          setIncrement(newIndex);
        }

        console.log("valeur de increment dans clickleft : " + increment);
        console.log(slidepicture[increment]);

        return "slideFromLeft";
    }

    function clickRight(){

        if (increment < ((slidepicture.length) - 1)) {

          let newIndex = (increment + 1)
          setIncrement(newIndex);
        }

        if (increment >= ((slidepicture.length) - 1)) {
          let newIndex = 0;
          setIncrement(newIndex);
        }

        console.log("valeur de increment dans clicright : " + increment);
        console.log(slidepicture[increment]);

        return "slideFromRight";
    }

    
    

    return (
      <DivSlider img={slidepicture[increment]} className="carroussel">
      
        <div className="carroussel__container-chevron">

          <div
            className="chevron"
            value="left"
            onClick={() => clickLeft()}
          >
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

        <p className="carroussel__compteur">
          {increment + 1} / {slidepicture.length}
        </p>
      </DivSlider>
    );
}

export {Carroussel}