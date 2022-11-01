// genere la page "Home"

//import des composants enfants
import {Banner} from "../../components/banner/banner.jsx";
import {Card} from "../../components/card/card.jsx";

//import de la list de logement
import {logements} from "../../data/logements.js";

//import des feuilles de style
import "../../style/CSS/home.css";


function Home(){


    return(

        <div className="home">
        
            <Banner pagename="home" text="Chez vous partout et ailleurs"/>
            
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

export {Home}