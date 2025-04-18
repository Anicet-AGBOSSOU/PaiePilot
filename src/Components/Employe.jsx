import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Employe() {
  const [employes, setEmployes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEmployes = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/employees');
      setEmployes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors du chargement des employés :', error);
    }
  };

  useEffect(() => {
    fetchEmployes();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-primary">Gestion des employés</h2>

      {loading ? (
        <p className="text-center">Chargement des données...</p>
      ) : (
        <div className="table-responsive shadow rounded bg-white p-3">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Poste</th>
                <th>Salaire brut</th>
                <th>Date d'embauche</th>
                <th>Situation matrimoniale</th>
                <th>Nombre d'enfants</th>
              </tr>
            </thead>
            <tbody>
              {employes.map(emp => (
                <tr key={emp._id}>
                  <td>{emp.nom}</td>
                  <td>{emp.prenom}</td>
                  <td>{emp.email}</td>
                  <td>{emp.poste}</td>
                  <td>{emp.salaireBrut} FCFA</td>
                  <td>{new Date(emp.dateEmbauche).toLocaleDateString()}</td>
                  <td>{emp.situationMatrimoniale}</td>
                  <td>{emp.nombreEnfants}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Employe;