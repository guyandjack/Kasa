// composant "carroussel"

//Import des differents modules
import { useState } from "react";
import styled from "styled-components";

//Import des images
import flecheDroite from "../../asset/kasa-chevron-droite-slider.svg";
import flecheGauche from "../../asset/kasa-chevron-gauche-slider.svg";

//Import des feuilles de style
import "../../style/CSS/carroussel.css";

const DivSlider = styled.div`
  width: 80%;
  height: fit-content;
  padding-top: 15%;
  padding-bottom: 15%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: url(${({ img }) => img});

  animation-name: ${({ way }) => way};
  animation-duration: 0.5s;
  animation-timing-function: linear;
`;

function Carroussel({ slidepicture }) {

  const [increment, setIncrement] = useState(0);

  let displayChevron = (slidepicture.length == 1)? false : true;

  function clickLeft() {
    if (increment > 0) {
      let newIndex = increment - 1;
      setIncrement(newIndex);
    }

    if (increment < 1) {
      let newIndex = slidepicture.length - 1;
      setIncrement(newIndex);
    }

    return "slideFromLeft";
  }

  function clickRight() {
    if (increment < slidepicture.length - 1) {
      let newIndex = increment + 1;
      setIncrement(newIndex);
    }

    if (increment >= slidepicture.length - 1) {
      let newIndex = 0;
      setIncrement(newIndex);
    }

    return "slideFromRight";
  }

  return (
    <DivSlider img={slidepicture[increment]} className="carroussel">
      

      {
        displayChevron? (

          <div className="carroussel__container-chevron">

            <div className="chevron" value="left" onClick={() => clickLeft()}>
              <img src={flecheGauche} alt="fleche defilement à gauche"></img>
            </div>

            <div className="chevron" value="right" onClick={() => clickRight()}>
              <img src={flecheDroite} alt="fleche defilement à droite"></img>
            </div>
          
          </div>) : ( null)
      }

        

      

      <p className="carroussel__compteur">
        {increment + 1} / {slidepicture.length}
      </p>
    </DivSlider>
  );
}

export { Carroussel };
