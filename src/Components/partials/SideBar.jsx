import React from "react";
import { Link } from "react-router-dom";

function SideBar({ isAuthenticated }) {
  // Si l'utilisateur n'est pas authentifié, ne rien afficher
  if (!isAuthenticated) {
    return null; // Ne rien afficher si l'utilisateur n'est pas authentifié
  }

  return (
    <div className="sidebar">
      <ul className="list-group">
        <li className="list-group-item">
          <Link to="/dashboard" className="nav-link">Tableau de Bord</Link>
        </li>
        <li className="list-group-item">
          <Link to="/gestion-employes" className="nav-link">Gestion des Employés</Link>
        </li>
        <li className="list-group-item">
          <Link to="/declaration-fiscale" className="nav-link">Déclarations Fiscales</Link>
        </li>
        <li className="list-group-item">
          <Link to="/declaration-Sociale" className="nav-link">Déclarations Sociales</Link>
        </li>
        <li className="list-group-item">
          <Link to="/calcul-salaire" className="nav-link">Calcul Salaire</Link>
        </li>
        <li className="list-group-item">
          <Link to="/bulletin-paie" className="nav-link">Bulletin de Paie</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
