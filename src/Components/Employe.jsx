import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Employe() {
  const [employes, setEmployes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    salary: '',
    hireDate: '',
    maritalStatus: 'Célibataire',
    numberOfChildren: 0,
  });

  const token = localStorage.getItem('token');

  const fetchEmployes = async () => {
    try {
      const response = await axios.get('https://api-paiepilot-2.onrender.com/api/employees', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEmployes(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors du chargement des employés :', error);
    }
  };

  useEffect(() => { fetchEmployes(); }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`https://api-paiepilot-2.onrender.com/api/employees/${editingId}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Employé modifié avec succès !');
      } else {
        await axios.post('https://api-paiepilot-2.onrender.com/api/employees', formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert('Employé ajouté avec succès !');
      }
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: '',
        salary: '',
        hireDate: '',
        maritalStatus: 'Célibataire',
        numberOfChildren: 0,
      });
      setEditingId(null);
      fetchEmployes();
    } catch (error) {
      console.error('Erreur lors de la soumission :', error);
      alert("Erreur lors de la soumission du formulaire.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet employé ?")) {
      try {
        await axios.delete(`https://api-paiepilot-2.onrender.com/api/employees/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        alert("Employé supprimé avec succès !");
        fetchEmployes();
      } catch (error) {
        console.error("Erreur lors de la suppression :", error);
        alert("Erreur lors de la suppression.");
      }
    }
  };

  const handleEdit = (emp) => {
    setFormData({
      firstName: emp.firstName,
      lastName: emp.lastName,
      email: emp.email,
      jobTitle: emp.jobTitle,
      salary: emp.salary,
      hireDate: emp.hireDate.slice(0, 10),
      maritalStatus: emp.maritalStatus,
      numberOfChildren: emp.numberOfChildren,
    });
    setEditingId(emp._id);
  };

  return (
    <div className="container py-4">
      <h2 className="text-center mb-4 text-primary">Gestion des employés</h2>

      <form className="mb-4 shadow p-4 rounded bg-white" onSubmit={handleSubmit}>
        <h5 className="mb-3">{editingId ? 'Modifier' : 'Ajouter'} un employé</h5>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Prénom</label>
            <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label>Nom</label>
            <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label>Email</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label>Poste</label>
            <input type="text" className="form-control" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label>Salaire Brut</label>
            <input type="number" className="form-control" name="salary" value={formData.salary} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label>Date d'embauche</label>
            <input type="date" className="form-control" name="hireDate" value={formData.hireDate} onChange={handleInputChange} required />
          </div>
          <div className="col-md-6 mb-3">
            <label>Situation matrimoniale</label>
            <select className="form-control" name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange}>
              <option>Célibataire</option>
              <option>Marié</option>
              <option>Divorcé</option>
              <option>Veuf(ve)</option>
            </select>
          </div>
          <div className="col-md-6 mb-3">
            <label>Nombre d'enfants</label>
            <input type="number" className="form-control" name="numberOfChildren" value={formData.numberOfChildren} onChange={handleInputChange} min="0" />
          </div>
        </div>
        <button type="submit" className="btn btn-success">{editingId ? 'Mettre à jour' : 'Ajouter'}</button>
      </form>

      {loading ? (
        <p className="text-center">Chargement des données...</p>
      ) : (
        <div className="table-responsive shadow rounded bg-white p-3">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Poste</th>
                <th>Salaire brut</th>
                <th>Date d'embauche</th>
                <th>Situation matrimoniale</th>
                <th>Enfants</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employes.map(emp => (
                <tr key={emp._id}>
                  <td>{emp.lastName}</td>
                  <td>{emp.firstName}</td>
                  <td>{emp.email}</td>
                  <td>{emp.jobTitle}</td>
                  <td>{emp.salary} FCFA</td>
                  <td>{new Date(emp.hireDate).toLocaleDateString()}</td>
                  <td>{emp.maritalStatus}</td>
                  <td>{emp.numberOfChildren}</td>
                  <td>
                    <button onClick={() => handleEdit(emp)} className="btn btn-warning btn-sm me-2">Modifier</button>
                    <button onClick={() => handleDelete(emp._id)} className="btn btn-danger btn-sm">Supprimer</button>
                  </td>
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