//Composant "Rating"

//Import des images
import redStars from "../../asset/rating-red-star.svg";
import greyStars from "../../asset/rating-grey-star.svg";

//Import feuille de style
import "../../style/CSS/rating.css";

//Fonction "Rating"

function Rating({ valuerating, totalrating }) {
  // determine l' affichage du rating rating
  let nbrRedStars = parseInt(valuerating, 10);
  let nbrGreyStars = totalrating - nbrRedStars;
  let arrayOfRedStars = [];
  let arrayOfGreyStars = [];

  for (let i = 1; i <= nbrRedStars; i++) {
    arrayOfRedStars.push("redstars");
  }

  for (let i = 1; i <= nbrGreyStars; i++) {
    arrayOfGreyStars.push("greystar");
  }

  return (
    <div className="rating">
      {arrayOfRedStars.map((star, index) => {
        return (
          <img
            className="info-rating__star"
            key={index}
            src={redStars}
            alt="etoile"
          ></img>
        );
      })}

      {arrayOfGreyStars.map((star, index) => {
        return (
          <img
            key={index}
            className="info-rating__star"
            src={greyStars}
            alt="etoile"
          ></img>
        );
      })}
    </div>
  );
}

export { Rating };
