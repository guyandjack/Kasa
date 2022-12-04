//Composant "Rating"

//Import des images
import redStars from "../../asset/rating-red-star.svg";
import greyStars from "../../asset/rating-grey-star.svg";

//Import feuille de style
import "../../style/CSS/rating.css";

//Fonction "Rating"

function Rating({ valuerating, totalrating }){
  
  // determine l'affichage du rating rating
  let nbrRedStars = parseInt(valuerating, 10);
  let nbrGreyStars = totalrating - nbrRedStars;
  let arrayOfRatingStars = [];
  
 

  for (let i = 1; i <= nbrRedStars; i++) {

     const etoileRouge = (
       <img key={"redstar" + i} className="info-rating__star" src={redStars} alt="etoile"></img>
     );
    arrayOfRatingStars.push(etoileRouge);
    
    
  }

  for (let i = 1; i <= nbrGreyStars; i++) {

    const etoileGrise = (
      <img key={"greystar" + i} className="info-rating__star" src={greyStars} alt="etoile"></img>
    );
    arrayOfRatingStars.push(etoileGrise);
  }

  return (
    <div className="rating">
      
      {arrayOfRatingStars}
      
    </div>
  );
}

export { Rating };
