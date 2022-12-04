//Composant "ImageCarrousel"

//Import des feuille de style
import "../../style/CSS/imagecarrousel.css"


//Fonction "ImageCarroussel"

function ImageCarrousel({imgSrc, imgAlt}) {
    return (
        <img className="image-carrousel" src={imgSrc} alt={imgAlt}></img>
    )
}

export {ImageCarrousel}