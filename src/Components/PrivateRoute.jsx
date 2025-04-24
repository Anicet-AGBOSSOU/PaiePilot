import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Si aucun token, redirige vers la page de connexion
    return <Navigate to="/connexion" replace />;
  }

  // Si le token existe, affiche l'enfant (le composant privé)
  return children;
};

export default PrivateRoute;
