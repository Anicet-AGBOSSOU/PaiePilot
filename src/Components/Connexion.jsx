import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Connexion() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api-paiepilot-2.onrender.com/api/auth/login', {
        companyEmail: email, // ✅ correspondance avec le backend
        password: motDePasse,
      });
      alert('Connexion réussie !');

      // Stocker le token si nécessaire
      localStorage.setItem('token', response.data.token);

      // Redirection
      navigate('/dashboard');
    } catch (error) {
      alert("Erreur lors de la connexion : " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="col-md-4 p-4 shadow rounded bg-white">
        <h3 className="text-center mb-4">Connexion</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Adresse e-mail</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Se connecter</button>
        </form>
        <div className="text-center mt-3">
          <span>Pas encore de compte ? </span>
          <Link to="/inscription">S'inscrire</Link>
        </div>
      </div>
    </div>
  );
}

export default Connexion;
