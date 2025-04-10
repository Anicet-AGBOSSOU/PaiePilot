import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importing Bootstrap's CSS



function Navbar() {
  return (
    <header className= 'd-flex justify-content-between align-items-center pt-2 pt-5 text-light w-auto bg-dark'>
      <h1 className= 'font-weight-bold ' style={{fontFamily: "Times New Roman"}}>Bookplaces</h1>
      <nav className= 'd-flex gap-5 ' >
        <Link className='text-light' style={{fontFamily: "Times New Roman"}} to="/Home">Accueil</Link>
        <Link className='text-light' style={{fontFamily: "Times New Roman"}} to="/Employe" >Gestion des employés</Link>
        <Link className='text-light' style={{fontFamily: "Times New Roman"}} to="/Fiscale" >Déclarations Fiscales</Link>
        <Link className='text-light' style={{fontFamily: "Times New Roman"}} to="/Sociale" >Déclarations Sociales</Link>
        <Link className='text-light' style={{fontFamily: "Times New Roman"}} to="/Salaire" >Calcul des Salaires</Link>
        <Link className='text-light' style={{fontFamily: "Times New Roman"}} to="/Paie" >Bulletin de Paie</Link>
        <Link className='text-light' style={{fontFamily: "Times New Roman"}} to="/Log in" >Inscription</Link>
        <Link className='text-light' style={{fontFamily: "Times New Roman"}} to="/sign in" >Connexion</Link>

      </nav>
    </header>
  );
}




export default Navbar;
