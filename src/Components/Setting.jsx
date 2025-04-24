import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Setting() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('light');
  const [formData, setFormData] = useState({
    nomEntreprise: '',
    emailEntreprise: '',
    numeroTelephone: '',
    adresse: '',
  });

  useEffect(() => {
    document.body.className = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  }, [theme]);

  const handleThemeChange = (mode) => {
    setTheme(mode);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
  const confirmLogout = window.confirm('Voulez-vous vraiment vous déconnecter ?');
      if (confirmLogout) {
        localStorage.removeItem('token');
        navigate('/connexion');
      }
    };
    
  const handleDeleteAccount = () => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.')) {
      alert('Compte supprimé.');
      navigate('/');
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert('Informations mises à jour !');
  };

  return (
    <div className="container py-5 position-relative">
      {/* Bouton Thème en haut à droite */}
      <div className="position-absolute top-0 end-0 mt-3 me-3">
  {/* <button
    className={`btn ${theme === 'light' ? 'btn-dark' : 'btn-light'}`}
    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
  >
    {theme === 'light' ? 'Mode Sombre' : 'Mode Clair'}
  </button> */}
</div>

      <h2 className="text-center mb-4">Paramètres du compte</h2>

      {/* Mise à jour des infos */}
      <div className="card mx-auto mb-4" style={{ maxWidth: '600px' }}>
        <div className="card-body">
          <h5 className="card-title">Mettre à jour les informations</h5>
          <form onSubmit={handleUpdate}>
            <div className="mb-3">
              <label className="form-label">Nom de l'entreprise</label>
              <input type="text" className="form-control" name="nomEntreprise" value={formData.nomEntreprise} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" name="emailEntreprise" value={formData.emailEntreprise} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Téléphone</label>
              <input type="text" className="form-control" name="numeroTelephone" value={formData.numeroTelephone} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Adresse</label>
              <input type="text" className="form-control" name="adresse" value={formData.adresse} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary w-100">Enregistrer</button>
          </form>
        </div>
      </div>

      {/* Déconnexion */}
      <div className="card mx-auto mb-3" style={{ maxWidth: '400px' }}>
        <div className="card-body text-center">
          <button className="btn btn-warning w-100" onClick={handleLogout}>Se déconnecter</button>
        </div>
      </div>

      {/* Suppression du compte */}
      <div className="card mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body text-center">
          <button className="btn btn-danger w-100" onClick={handleDeleteAccount}>Supprimer le compte</button>
        </div>
      </div>
    </div>
  );
}

export default Setting;
