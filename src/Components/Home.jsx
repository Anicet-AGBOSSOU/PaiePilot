import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container py-5">
      <header className="text-center mb-5">
        <h1 className="text-primary">Bienvenue sur PaiePilot</h1>
        <p className="lead">La solution de gestion de paie adaptée aux PME et PMI au Bénin</p>
        {/* <div className="mt-4">
          <Link to="/inscription" className="btn btn-primary me-3">S'inscrire</Link>
          <Link to="/connexion" className="btn btn-outline-primary">Se connecter</Link>
        </div> */}
      </header>

      <section className="mb-5">
        <h2 className="text-center text-secondary mb-4">À propos de la Fiscalité Béninoise dans la Gestion de Paie</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="text-primary">ITS (Impôt sur les Traitements et Salaires)</h5>
              <p>L’ITS est un impôt prélevé sur les salaires versés aux employés. Il est retenu à la source par l’employeur.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="text-primary">VPS (Versement Patronal sur Salaire)</h5>
              <p>Le VPS est une contribution patronale sur les salaires, destinée au financement de la protection sociale.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="text-primary">CO (Cotisation Ouvrière)</h5>
              <p>La CO est la part des cotisations sociales prélevée sur le salaire brut de l’employé pour les prestations sociales.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 shadow rounded bg-white h-100">
              <h5 className="text-primary">CPS (Cotisation Patronale sur Salaire)</h5>
              <p>La CPS est la part versée par l’employeur aux organismes sociaux pour couvrir les charges liées au personnel.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-5">
        <h2 className="text-center text-secondary mb-4">Pourquoi choisir PaiePilot ?</h2>
        <div id="paiePilotCarousel" className="carousel slide shadow rounded overflow-hidden" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active bg-light p-5">
              <div className="d-flex flex-column align-items-center">
                <h4 className="text-primary mb-3">Conformité Fiscale Totale</h4>
                <p className="text-center text-muted w-75">
                  PaiePilot vous aide à gérer les obligations fiscales locales comme l’ITS, VPS, CO, CPS avec précision.
                </p>
              </div>
            </div>
            <div className="carousel-item bg-light p-5">
              <div className="d-flex flex-column align-items-center">
                <h4 className="text-primary mb-3">Simplicité d’utilisation</h4>
                <p className="text-center text-muted w-75">
                  Une interface intuitive pensée pour les dirigeants de PME sans besoin de compétences techniques.
                </p>
              </div>
            </div>
            <div className="carousel-item bg-light p-5">
              <div className="d-flex flex-column align-items-center">
                <h4 className="text-primary mb-3">Gain de temps et fiabilité</h4>
                <p className="text-center text-muted w-75">
                  Automatisez le calcul des cotisations, les déclarations mensuelles, et réduisez les erreurs humaines.
                </p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#paiePilotCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span className="visually-hidden">Précédent</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#paiePilotCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark rounded-circle p-2" aria-hidden="true"></span>
            <span className="visually-hidden">Suivant</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
