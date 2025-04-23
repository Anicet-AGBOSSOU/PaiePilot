import React from 'react';

function MentionsLegales() {
  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Mentions légales</h2>
      <div className="card shadow p-4">
        <p><strong>Éditeur :</strong> PaiePilot</p>
        <p><strong>Responsable de la publication :</strong> AGBOSSOU Anicet M. et son équipe</p>
        <p><strong>Hébergement :</strong> Netlify.com</p>
        <p><strong>Adresse :</strong> Parakou, Bénin</p>
        <p>
          Ce site est destiné à fournir un outil de simulation de fiche de paie. Les données saisies restent confidentielles
          et ne sont pas partagées.
        </p>
      </div>
    </div>
  );
}

export default MentionsLegales;
