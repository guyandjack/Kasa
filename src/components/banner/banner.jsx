// Composant "Banner"

//Import du hook "useState"
import { useState } from "react";

//Importation des url des images pour les différents banner et taille d'écran
import { urlImgBanner } from "../../data/imgbanner/imgbanner.js";

//Import feuille de style
import "../../style/CSS/banner.css";

//Import du module "styled-components"
import styled from "styled-components";

const StyledBanner = styled.div`
  height: ${({ $bannerHeight }) => $bannerHeight};

  transition: height 250ms linear;

  &::before {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border-radius: 25px;
    content: "";
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${({ $bannerImage }) => $bannerImage});
    opacity: 0.7;
  }
`;

function Banner({ pagename, text, height }) {
  const [sizeScreen, setSizeScreen] = useState(window.innerWidth);

  function getTypeScreen() {
    if (sizeScreen >= 0 && sizeScreen <= 768) {
      return "large";
    }

    if (sizeScreen >= 769 && sizeScreen <= 992) {
      return "large";
    }

    if (sizeScreen >= 993 && sizeScreen <= 1500) {
      return "xlarge";
    }

    if (sizeScreen >= 1501) {
      return "xxlarge";
    }
  }

  let typeScreen = getTypeScreen();
  let imgUrl = urlImgBanner[pagename][typeScreen];

  window.addEventListener("resize", () => setSizeScreen(window.innerWidth));

  return (
    <StyledBanner id="banner" $bannerHeight={height} $bannerImage={imgUrl}>
      {text ? <p id="banner__text">{text}</p> : null}
    </StyledBanner>
  );
}

export { Banner };
