// composant "infologement" qui contient les informations relatives au logement selectionné

//import des images
import redStars from "../../asset/rating-red-star.svg";
import greyStars from "../../asset/rating-grey-star.svg";

//import feuille de style
import "../../style/SASS/components/infoslogement/infoslogement.scss";

function InfosLogement({info}){

    // determine l' affichage du rating rating
    let nbrRedStars = parseInt(info.rating, 10);
    let nbrGreyStars = (5 - nbrRedStars);
    let arrayOfRedStars = [];
    let arrayOfGreyStars = [];

    for(let i=1; i<= nbrRedStars; i++){
        arrayOfRedStars.push("redstars");
    }

    for(let i=1; i<= nbrGreyStars; i++){
        
        arrayOfGreyStars.push("greystar")
    }
    
    

    return(
        <div className="infoslogement">

            <div className="infoslogement__container--1">

                <p className="info-title">{info.title}</p>

                <p className="info-location">{info.location}</p>

                <div className="info-tag-container">

                    {
                        (info.tags).map((tag, index)=>{

                        return(<span key={index} className="info-tag">{tag}</span>)})
                    
                    }
                
                </div>

            </div>

            <div className="infoslogement__container--2">

                <div className="info-rating">

                    { 
                      arrayOfRedStars.map((star, index)=>{
                      
                        return(
                            <img className="info-rating__star" key={index} src={redStars} alt="etoile"></img>
                        )
                      }
                      )
                    } 

                    { 
                      arrayOfGreyStars.map((star, index)=>{
                      
                        return(
                            <img key={index} className="info-rating__star" src={greyStars} alt="etoile"></img>
                        )
                      }
                      )
                    } 
                        
                    

                </div>

                <div className="info-host">

                    <div className="info-host__name">{info.host.name}</div>
                    <img className="info-host__face" src={info.host.picture} alt=" de profil"></img>

                </div>

            </div>

        </div>
    )
}

export {InfosLogement}