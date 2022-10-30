//logique de l' application "kasa" implementée dans le composant "App"

//import du "Router"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import des pages
import {Home} from "../src/pages/home/home.jsx";
import {FicheLogement} from "../src/pages/fiche/fiche-logement.jsx";
import {Apropos} from "../src/pages/apropos/apropos.jsx";
import {Error} from "../src/pages/error/error.jsx";

//import des composants
import {Header} from "../src/components/header/header.jsx";
import {Footer} from "../src/components/footer/footer.jsx";

//import des feuilles de style 
import "./App.scss";

function App() {
  return(
    <Router>
      <Header />

      <Routes>

        <Route exact path="/" element={<Home />}></Route>

        <Route  path="/logement" element={<FicheLogement />}></Route>

        <Route exact path="/apropos" element={<Apropos />}></Route>

        <Route  path="/*" element={<Error />}></Route>

      </Routes>

      <Footer />

    </Router>
  )
}

 

export  {App};
