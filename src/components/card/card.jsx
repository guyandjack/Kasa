// composant "card" presentation logement

//import de "protypes" pour le typages des props
import PropTypes from "prop-types";

//import du module "Link"
import {Link} from "react-router-dom";

//import feuille de style
import "../../style/CSS/card.css";

//import du module "styled-component"
import styled from "styled-components";


const DivContainerImg = styled.div`
  width: 100%;
  height: 60%;
  

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  overflow: hidden;
  background-image: url(${({ url }) => url});
`;


function Card({cover, title, rating, name, id}){
 
let logementId = id.toString();
let urlLogement = "/logement/" + logementId;

    
    return (
        <Link className="card" to={urlLogement}>
          <DivContainerImg url={cover}></DivContainerImg>
          <p className="card__name">{name} <span>vous propose:</span> </p>
          <p className="card__title">{title}</p>
          <p className="card__rating">Avis client: {rating} / 5</p>
        </Link>
    );
}

Card.propTypes = {
    cover : PropTypes.string,
    title : PropTypes.string,
    rating : PropTypes.string,
    name : PropTypes.string,
}

export {Card}