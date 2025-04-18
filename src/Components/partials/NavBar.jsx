import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'



function NavBar() {
  const getNavLinkClass = ({ isActive }) =>
    `nav-link fw-bold ${isActive ? 'text-warning' : 'text-white'}`;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-warning fw-bold" to="/">
          PaiePilot
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex justify-content-around">
            {/* <li className="nav-item">
              <NavLink to="/gestion-employes" className={getNavLinkClass}>
                Gestion des Employés
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/declaration-fiscale" className={getNavLinkClass}>
                Déclarations Fiscales et sociales
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to="/declaration-sociale" className={getNavLinkClass}>
                Déclaration Sociale
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to="/calcul-salaire" className={getNavLinkClass}>
                 Salaire et Bulletin de Paie
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink to="/bulletin-paie" className={getNavLinkClass}>
                Bulletin de Paie
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to="/inscription" className={getNavLinkClass}>
                Inscription
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/connexion" className={getNavLinkClass}>
                Connexion
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/dashboard" className={getNavLinkClass}>
                Tableau de Bord
              </NavLink>
            </li>

            {/* <li className="nav-item">
              <NavLink to="/about" className={getNavLinkClass}>
                À-Propos
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

  export default NavBar;
