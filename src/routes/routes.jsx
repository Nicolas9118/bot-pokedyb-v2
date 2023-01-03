import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home"
// import Hall from "../pages/Hall_of_Fame/Hall_of_Fame"
// import Invoc from "../pages/Invoc/Invoc"
// import Login from "../pages/Login/Login"
// import Pokedex from "../pages/Pokedex/Pokedex"
// import Safari from "../pages/Safari/Safari"
// import Tour from "../pages/Tour/Tour"
// import Trade from "../pages/Trade/Trade"

function Adresse() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/HallOfFame" element={<Hall />} />
          <Route exact path="/Invoc" element={<Invoc />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Pokedex" element={<Pokedex />} />
          <Route exact path="/Safari" element={<Safari />} />
          <Route exact path="/Tour" element={<Tour />} />
          <Route exact path="/Trade" element={<Trade />} /> */}
        </Routes>
    </BrowserRouter>
  );
}

export default Adresse;