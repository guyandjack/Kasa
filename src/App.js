//logique de l' application "kasa" implementée dans le composant "App"

//import du "Router"
import { BrowserRouter as Router, Routes, Route, Redirect } from "react-router-dom";

//import des pages
import {PageHome} from "./pages/home/page_home.jsx";
import {PageLogement} from "./pages/logement/page_logement.jsx";
import {PageApropos} from "./pages/apropos/page_apropos.jsx";
import {PageError} from "./pages/error/page_error.jsx";

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

        <Route exact path="/" element={<PageHome />}></Route>

        <Route  path="/logement/:_id" element={<PageLogement />}></Route>

        <Route exact path="/apropos" element={<PageApropos />}></Route>

        <Route  path="/*" element={<PageError />}></Route>

      </Routes>

      <Footer />

    </Router>
  )
}

 

export  {App};
