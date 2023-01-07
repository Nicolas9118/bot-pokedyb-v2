import { Routes, Route, BrowserRouter } from "react-router-dom";

// import Layout from "../Layout/Layout"
import Login from "../pages/Login/Login"
import Home from "../pages/Home/Home"
// import Invoc from "../pages/Invoc/Invoc"
// import Tour from "../pages/Tour/Tour"
import Safari from "../pages/Safari/Safari"
// import Trade from "../pages/Trade/Trade"
import HallOfFame from "../pages/HallOfFame/HallOfFame"
import Dresseur from "../pages/DetailDresseur/DetailDresseur";
import Pokedex from "../pages/Pokedex/Pokedex"
import Pokemon from "../pages/DetailsPokemon/DetailPokemon"

function Adresse() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Safari" element={<Safari />} />
          <Route exact path="/HallOfFame" element={<HallOfFame />} />
          <Route exact path="/Dresseur/:id" element={<Dresseur />} />
          <Route exact path="/Pokedex" element={<Pokedex />} />
          <Route exact path="/Pokemon/:id" element={<Pokemon />} />
          {/* <Route exact path="/Invoc" element={<Invoc />} />
          <Route exact path="/Tour" element={<Tour />} />
          <Route exact path="/Trade" element={<Trade />} /> */}
        </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default Adresse;