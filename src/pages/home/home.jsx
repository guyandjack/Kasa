// genere le composant "Home"

//import des composants enfants
import {Banner} from "../../components/banner/banner.jsx"


function Home(){
    return(
        <div>
        <p>On est sur la page home</p>
        <Banner />
        </div>
    
    )
}

export {Home}