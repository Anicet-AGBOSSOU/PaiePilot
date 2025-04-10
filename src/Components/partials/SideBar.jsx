import React from 'react'

function SideBar() {
    return (
      <aside className="bg-light p-3"> 
        <ul className="nav flex-column"> 
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Home">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gestion-employes">Gestion des Employés</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/declaration-fiscale">Déclaration Fiscale</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/declaration-sociale">Déclaration Sociale</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calcul-salaire">Calcul de Salaire</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bulletin-paie">Bulletin de Paie</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/inscription">Inscription</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/connexion">Connexion</Link>
          </li>
        </ul>
      </aside>
    );
  }
  
  

export default SideBar