import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./icons.js";
import BedtimeAstrology from "./screens/BedtimeAstrology";
import BeginnerMain from "./screens/BeginnerMain";
import Interest from "./screens/Interest";
import KnowYourEnergy from "./screens/KnowYourEnergy";
import Level from "./screens/Level";
import Name from "./screens/Name";
import SkilledMain from "./screens/SkilledMain";
import WaterSigns from "./screens/WaterSigns";
import GuruMain from "./screens/GuruMain";
import BeginnerSkills from "./screens/BeginnerSkills";
import SkilledSkills from "./screens/SkilledSkills";
import GuruSkills from "./screens/GuruSkills";
import Index from "./screens/Index";
import KnowYourEnergyS from "./screens/KnowYourEnergyS";
import BedtimeAstrologyS from "./screens/BedtimeAstrologyS";
import Watersignss from "./screens/Watersignss";
import KnowYourEnergyG from "./screens/KnowYourEnergyG";
import BedtimeAstrologyG from "./screens/BedtimeAstrologyG";
import WatersignsG from "./screens/WatersignsG";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/BedtimeAstrology/" exact component={BedtimeAstrology} />
      <Route path="/BeginnerMain/" exact component={BeginnerMain} />
      <Route path="/Interest/" exact component={Interest} />
      <Route path="/KnowYourEnergy/" exact component={KnowYourEnergy} />
      <Route path="/Level/" exact component={Level} />
      <Route path="/Name/" exact component={Name} />
      <Route path="/SkilledMain/" exact component={SkilledMain} />
      <Route path="/WaterSigns/" exact component={WaterSigns} />
      <Route path="/GuruMain/" exact component={GuruMain} />
      <Route path="/BeginnerSkills/" exact component={BeginnerSkills} />
      <Route path="/SkilledSkills/" exact component={SkilledSkills} />
      <Route path="/GuruSkills/" exact component={GuruSkills} />

      <Route path="/KnowYourEnergyS/" exact component={KnowYourEnergyS} />
      <Route path="/BedtimeAstrologyS/" exact component={BedtimeAstrologyS} />
      <Route path="/Watersignss/" exact component={Watersignss} />
      <Route path="/KnowYourEnergyG/" exact component={KnowYourEnergyG} />
      <Route path="/BedtimeAstrologyG/" exact component={BedtimeAstrologyG} />
      <Route path="/WatersignsG/" exact component={WatersignsG} />
    </Router>
  );
}

export default App;
