import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-primary text-white p-3 vh-100" style={{ width: '200px' }}>
        <h4 className="mb-4 text-center">Tableau de Bord</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/">Accueil</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/gestion-employes">Gestion des employés</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/bulletin-paie">Bulletins de paie</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/declaration-fiscale">Déclarations fiscales et sociales</Link>
          </li>
          <li className="nav-item mb-2">
            <Link className="nav-link text-white" to="/parametres">Paramètres</Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 p-4">
        <h2 className="mb-4">Bienvenue dans votre espace PaiePilot</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card text-white bg-primary h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Employés</h5>
                <p className="card-text">Nombre total : 25</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-success h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Bulletins générés</h5>
                <p className="card-text">Dernier mois : 24</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-warning h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Déclarations</h5>
                <p className="card-text">ITS, VPS, CO, CPS</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-white bg-danger h-100 shadow">
              <div className="card-body">
                <h5 className="card-title">Alertes</h5>
                <p className="card-text">2 paiements en attente</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h4>Rappels fiscaux</h4>
          <ul>
            <li>Déclaration ITS : avant le 10 de chaque mois</li>
            <li>Versement VPS & CPS : avant le 15</li>
            <li>Gestion mensuelle des bulletins de paie</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
