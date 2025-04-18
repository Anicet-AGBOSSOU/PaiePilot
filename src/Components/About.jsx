import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
  return (




    
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="bg-white shadow rounded p-5">
            <h2 className="text-center text-primary mb-4">À propos de PaiePilot</h2>
            <p className="lead text-justify">
              PaiePilot est une plateforme dédiée à la gestion simplifiée et automatisée de la paie pour les PME et PMI du Bénin. 
              Elle a été conçue pour permettre aux entreprises de rester en conformité avec les obligations fiscales et sociales locales, 
              tout en leur faisant gagner du temps et en réduisant les erreurs.
            </p>

            <h4 className="text-success mt-4">Notre mission</h4>
            <p>
              Accompagner les entreprises béninoises dans la maîtrise de leur gestion salariale en leur fournissant un outil fiable, intuitif, 
              et conforme à la législation fiscale et sociale en vigueur.
            </p>

            <h4 className="text-success mt-4">Fonctionnalités clés</h4>
            <ul>
              <li>Calcul automatique des salaires nets et des charges sociales</li>
              <li>Génération des bulletins de paie et déclarations fiscales (ITS, VPS, CO, CPS)</li>
              <li>Archivage sécurisé des documents</li>
              <li>Tableau de bord clair pour le suivi des charges et salaires</li>
            </ul>

            <h4 className="text-success mt-4">Pourquoi le Bénin ?</h4>
            <p>
              Le paysage fiscal béninois est en constante évolution. PaiePilot répond au besoin croissant des entreprises locales 
              de se conformer efficacement aux exigences fiscales, notamment en matière d’Impôt sur Traitement et Salaires (ITS), 
              Versement Patronal sur Salaire (VPS), Cotisation Ouvrière (CO), et Cotisation Patronale sur Salaire (CPS).
            </p>

            <h4 className="text-success mt-4">Nous contacter</h4>
            <p>
              Pour toute question, suggestion ou besoin d’assistance, n’hésitez pas à nous contacter via notre formulaire de contact 
              ou par email à <strong>support@paiepilot.bj</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;