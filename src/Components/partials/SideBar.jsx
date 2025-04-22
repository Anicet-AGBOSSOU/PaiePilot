import React from 'react'
import { Link } from "react-router-dom";


function SideBar() {
    return (
      <div className="bg-primary text-white p-3" style={{ width: '250px' }}>
              <h4 className="text-center mb-4">PaiePilot</h4>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <Link to="/gestion-employes" className="nav-link text-white fw-bold">👥 Gestion des employés</Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/declaration-fiscale" className="nav-link text-white fw-bold">📊 Déclarations fiscales & sociales</Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/bulletin-paie" className="nav-link text-white fw-bold">💰 Salaires</Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/bulletin-paie" className="nav-link text-white fw-bold">📄 Bulletins de paie</Link>
                </li>
                <li className="nav-item mb-2">
                  <Link to="/about" className="nav-link text-white fw-bold">ℹ️ À propos</Link>
                </li>
                <li className="nav-item">
                  <Link to="/setting" className="nav-link text-white fw-bold">⚙️ Paramètres</Link>
                </li>
              </ul>
            </div>
      
    );
  }
  
  

export default SideBar