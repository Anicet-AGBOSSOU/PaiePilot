import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Salaire() {
  return (
    <div className="container py-4">
      <h2 className="mb-4 text-success">Salaires & Bulletins de paie</h2>
      <div className="card shadow-sm p-4">
        <p>Générez les bulletins de paie automatiquement à partir des données des employés.</p>

        <ul className="list-group list-group-flush mb-4">
          <li className="list-group-item">Calcul des salaires en tenant compte des déductions : ITS, CO, CPS, VPS</li>
          <li className="list-group-item">Génération automatique des bulletins mensuels</li>
          <li className="list-group-item">Visualisation et export des bulletins (PDF)</li>
        </ul>

        <button className="btn btn-outline-success me-2">Générer les bulletins</button>
        <button className="btn btn-outline-primary">Voir les bulletins</button>
      </div>
    </div>
  );
}

export default Salaire;
