
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function Setting() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');

  const [formData, setFormData] = useState({
    nomEntreprise: '',
    emailEntreprise: '',
    adresse: '',
    numeroTelephone: '',
  });

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [theme]);

  const fetchCompanyData = async () => {
    const token = localStorage.getItem('token');
    const companyId = localStorage.getItem('companyId');

    if (token && companyId) {
      try {
        const response = await axios.get(`https://api-paiepilot-2.onrender.com/api/auth/companies/${companyId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;
        setFormData({
          nomEntreprise: data.companyName || '',
          emailEntreprise: data.companyEmail || '',
          adresse: data.address || '',
          numeroTelephone: data.phoneNumber || '',
        });
      } catch (error) {
        console.error('Erreur récupération entreprise :', error);
        alert("Impossible de charger les données de l'entreprise.");
      }
    }
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const companyId = localStorage.getItem('companyId');

    try {
      await axios.put(
        `https://api-paiepilot-2.onrender.com/api/auth/companies/${companyId}`,
        {
          companyName: formData.nomEntreprise,
          companyEmail: formData.emailEntreprise,
          address: formData.adresse,
          phoneNumber: formData.numeroTelephone,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Informations mises à jour avec succès !');
      fetchCompanyData();
    } catch (error) {
      console.error('Erreur mise à jour entreprise :', error);
      alert('Erreur lors de la mise à jour.');
    }
  };

  const handleLogout = () => {
    if (window.confirm('Voulez-vous vraiment vous déconnecter ?')) {
      localStorage.removeItem('token');
      localStorage.removeItem('companyId');
      navigate('/connexion');
    }
  };

  const handleDeleteAccount = async () => {
    const token = localStorage.getItem('token');
    const companyId = localStorage.getItem('companyId');

    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
      try {
        await axios.delete(`https://api-paiepilot-2.onrender.com/api/auth/companies/${companyId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        alert('Compte supprimé avec succès.');
        localStorage.removeItem('token');
        localStorage.removeItem('companyId');
        navigate('/');
      } catch (error) {
        console.error('Erreur suppression entreprise :', error);
        alert("Erreur lors de la suppression du compte.");
      }
    }
  };

  return (
    <div className="container py-5 position-relative">
      <h2 className="text-center mb-4">Paramètres du compte</h2>

      <div className="card shadow mx-auto mb-4" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <h5 className="card-title mb-3">Mettre à jour les informations</h5>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">Nom de l'entreprise</label>
              <input
                type="text"
                className="form-control"
                name="nomEntreprise"
                value={formData.nomEntreprise}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="emailEntreprise"
                value={formData.emailEntreprise}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Adresse</label>
              <input
                type="text"
                className="form-control"
                name="adresse"
                value={formData.adresse}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Téléphone</label>
              <input
                type="text"
                className="form-control"
                name="numeroTelephone"
                value={formData.numeroTelephone}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Enregistrer les modifications
            </button>
          </form>
        </div>
      </div>

      <div className="card mx-auto mb-3 shadow" style={{ maxWidth: '400px' }}>
        <div className="card-body text-center">
          <button className="btn btn-warning w-100" onClick={handleLogout}>
            Se déconnecter
          </button>
        </div>
      </div>

      <div className="card mx-auto shadow" style={{ maxWidth: '400px' }}>
        <div className="card-body text-center">
          <button className="btn btn-danger w-100" onClick={handleDeleteAccount}>
            Supprimer le compte
          </button>
        </div>
      </div>
    </div>
  );
}

export default Setting;

