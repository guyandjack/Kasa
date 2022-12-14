// composant "infologement" qui contient les informations relatives au logement selectionn√©

//Import des composants enfants
import { Rating } from "../rating/rating.jsx";
import { Tag } from "../tag/tag.jsx";

//Import feuille de style
import "../../style/CSS/infoslogement.css";

//Fonction "InfosLogement"

function InfosLogement({ info }) {
  let valueRating = info.rating;
  let totalRating = 5;

  return (
    <div className="infoslogement">

      <div className="infoslogement__container--1">
      
        <p className="info-title">{info.title}</p>

        <p className="info-location">{info.location}</p>

        <div className="info-tag-container">
          {info.tags.map((tag) => {
           
            return (
              <Tag
                key={tag}
                className="info-tag"
                tagname={tag} />
            );
          })}
        </div>

      </div>

      <div className="infoslogement__container--2">
        
        <div className="info-rating">
          <Rating valuerating={valueRating} totalrating={totalRating} />
        </div>

        <div className="info-host">
          <div className="info-host__name">{info.host.name}</div>
          <img
            className="info-host__face"
            src={info.host.picture}
            alt=" de profil"
          ></img>
        </div>
      </div>
    </div>
  );
}

export { InfosLogement };
