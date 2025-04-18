import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Employe from "./Components/Employe";
import DFiscale from "./Components/DFiscale";
import DSociale from "./Components/DSociale";
import Salaire from "./Components/Salaire";
import Paie from "./Components/Paie";
import Inscription from "./Components/Inscription";
import Connexion from "./Components/Connexion";
import NavBar from "./Components/partials/NavBar";
import Footer from "./Components/partials/Footer";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import Dashboard from "./Components/Dashboard";
// import SideBar from "./Components/partials/SideBar";

function App() {

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">        
      <NavBar />
      {/* <SideBar /> */}
      <div className="container mt-4">           
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/gestion-employes" element={<Employe />} />
                <Route path="/declaration-fiscale" element={<DFiscale />} />
                <Route path="/declaration-Sociale" element={<DSociale />} />
                <Route path="/calcul-salaire" element={<Salaire />} />
                <Route path="/bulletin-paie" element={<Paie />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/connexion" element={<Connexion />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/about" element={<About />} />

                <Route path="*" element={<NotFound />} />

              </Routes>
            
          
        </div>
        <Footer />
      </div>
    </Router>
  );
}
export default App;