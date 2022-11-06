/******************************* Page "Home"*************************************
 *******************************************************************************/ 

//Import des composants enfants
import {Banner} from "../../components/banner/banner.jsx";
import {Card} from "../../components/card/card.jsx";


//Import de la list de logement
import {logements} from "../../data/logements.js";

//Import des feuilles de style
import "../../style/CSS/home.css";



//Fonction "PageHome"

function PageHome(){


    return(

        
        <div className="home">
        
            <Banner pagename="home" text="Chez vous, partout et ailleurs" height="111px"/>
            
            <ul className="home__logements">
                {logements.map((room) => {
                    return (
                        <li key={room.id} className="home__logements__li"> 
                            <Card  
                                id={room.id} 
                                cover={room.cover} 
                                title={room.title}
                                name={room.host.name} 
                                rating={room.rating}/>
                        </li>
                    )
                })}
            </ul>
            
        </div>
        
    
    )
}

export {PageHome}