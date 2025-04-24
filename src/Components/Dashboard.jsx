import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Dashboard() {
  return (
    <div className="d-flex" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <div className="bg-primary text-white p-3" style={{ width: '250px' }}>
        <h4 className="text-center mb-4">PaiePilot</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/gestion-employes" className="nav-link text-white fw-bold">👥 Gestion des employés</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/declaration-fiscale" className="nav-link text-white fw-bold">📊 Déclarations fiscales & sociales</Link>
          </li>
          {/* <li className="nav-item mb-2">
            <Link to="/bulletin-paie" className="nav-link text-white fw-bold">💰 Salaires</Link>
          </li> */}
          <li className="nav-item mb-2">
            <Link to="/bulletin-paie" className="nav-link text-white fw-bold">📄 Salaires et Bulletins de paie</Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/about" className="nav-link text-white fw-bold">ℹ️ À propos</Link>
          </li>
          <li className="nav-item">
            <Link to="/setting" className="nav-link text-white fw-bold">⚙️ Paramètres</Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-grow-1 bg-light p-4">
        <h2 className="mb-4 text-primary">Tableau de bord</h2>
        <div className="p-4 bg-white shadow rounded">
          <h5>Bienvenue sur votre espace de gestion PaiePilot 👋</h5>
          <p className="text-muted">
            Utilisez le menu de gauche pour naviguer entre les différentes fonctionnalités. 
            Gérez facilement vos employés, salaires, déclarations fiscales et sociales, et bien plus encore.
          </p>
         <br /> <p>Vous êtes connecté !</p>
        </div>
      </div>
      </div>
    );
  }


// const logout = () => {
//   localStorage.removeItem('token');
//   navigate('/connexion');
// };

    

export default Dashboard;