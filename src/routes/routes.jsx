import { Routes, Route, BrowserRouter } from "react-router-dom";

// import Layout from "../Layout/Layout"
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Invoc from "../pages/Summon/Summon";
import Tower from "../pages/Tower/Tower";
import Safari from "../pages/Safari/Safari";
import Trade from "../pages/Trade/Trade";
import HallOfFame from "../pages/HallOfFame/HallOfFame";
import Dresseur from "../pages/RetailTrainer/RetailTrainer";
import Pokedex from "../pages/Pokedex/Pokedex";
import Pokemon from "../pages/RetailPokemon/RetailPokemon";

function Adresse() {
  return (
    <BrowserRouter>
      {/* <Layout> */}
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/Home" element={<Home />} />

        <Route exact path="/Summon" element={<Invoc />} />
        <Route exact path="/Tower" element={<Tower />} />
        <Route exact path="/Safari" element={<Safari />} />

        <Route exact path="/Pokedex" element={<Pokedex />} />
        <Route exact path="/Pokemon/:id" element={<Pokemon />} />

        <Route exact path="/Trade" element={<Trade />} />

        <Route exact path="/HallOfFame" element={<HallOfFame />} />
        <Route exact path="/Trainer" element={<Dresseur />} />
      </Routes>
      {/* </Layout> */}
    </BrowserRouter>
  );
}

export default Adresse;
