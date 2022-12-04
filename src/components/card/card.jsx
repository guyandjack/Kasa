// composant "card" presentation logement

//Import de "protypes" pour le typages des props
import PropTypes from "prop-types";

//Import du module "Link"
import { Link } from "react-router-dom";

//Import des composants enfants
import { Rating } from "../rating/rating.jsx";

//Import feuille de style
import "../../style/CSS/card.css";

//Import du module "styled-component"
import styled from "styled-components";

const DivContainerImg = styled.div`
  width: 100%;
  height: 60%;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${({ url }) => url});
`;

function Card({ cover, title, rating, name, id }) {
  let logementId = id.toString();
  let urlLogement = "/logement/" + logementId;

  return (
    <Link className="card" to={urlLogement}>
      <DivContainerImg url={cover}></DivContainerImg>
      <p className="card__name">
        {name} <span>vous propose:</span>
      </p>
      <p className="card__title">{title}</p>

      <Rating className="card__rating" valuerating={rating} totalrating={5} />
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
