import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/partials/NavBar";
import Footer from "./Components/partials/Footer";


function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Employe" element={<Employe />} />
      <Route path="/Fiscale" element={<DFiscale />} />
      <Route path="/Sociale" element={<DSociale />} />
      <Route path="/Salaire" element={<Salaire />} />
      <Route path="/Paie" element={<Paie />} />
      <Route path="/Log in" element={<Incription />} />
      <Route path="/Sign in" element={<Connexion />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;