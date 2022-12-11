// composant "card" presentation logement

//Import de "protypes" pour le typages des props
import PropTypes from "prop-types";

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des composants enfants
import { Rating } from "../rating/rating.jsx";

//Import feuille de style
import "../../style/CSS/card.css";


function Card({ cover, title, rating, name, id }) {
  let logementId = id.toString();
  let urlLogement = "/logement/" + logementId;

  return (
    <Link className="card" to={urlLogement}>
      <img
        className="card__img"
        src={cover}
        alt="vignette de presentation du logement"
      ></img>

      <p className="card__name">
        {name} <span>vous propose:</span>
      </p>

      <p className="card__title">{title}</p>

      <div className="card__rating">
        <Rating valuerating={rating} totalrating={5} />
      </div>
      
    </Link>
  );
}

Card.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

export { Card };
