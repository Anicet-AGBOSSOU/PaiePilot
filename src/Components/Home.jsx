import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useEffect } from 'react';


function Home() {
    return (
  <> 
      
    <div className="container py-5 accueil-container">
    <h1 className="text-center">Bienvenu sur notre site Web PaiePilot!!!</h1>
    <p className="subtitle text-center">Votre destination pour un bon suivi sur les réglementations fiscales et sociales Béninoises </p>
  
    <main className="accueil-main">
      <section className="featured-content mb-5">
        <h2 className="text-center">Découvrez nos fonctionnalités principales</h2>
        <ul className="list-group">
          <li className="list-group-item"><strong>Fonctionnalité 1 :</strong> Explorer la fiscalité Béninoise</li>
          <li className="list-group-item"><strong>Fonctionnalité 2 :</strong> Comprendre les différents types de déclarations</li>
          <li className="list-group-item"><strong>Fonctionnalité 3 :</strong> Savoir se mettre à jour au regard du fisc</li>
        </ul>
      </section>
  
      <section className="call-to-action text-center mb-5">
        <p><strong>Prêt à commencer ???</strong></p>
        <button className="btn btn-primary mx-2"><strong>Se connecter</strong></button>
        <button className="btn btn-success mx-2"><strong>S'inscrire</strong></button>
        <button className="btn btn-info mx-2"><strong>En savoir plus</strong></button>
      </section>
  
      <section className="pourquoi-nous-choisir mb-5">
        <h2 className="text-center">Pourquoi choisir PaiePilot</h2>
        <ul className="list-group">
          <li className="list-group-item">Avantage clé 1</li>
          <li className="list-group-item">Avantage clé 2</li>
          <li className="list-group-item">Avantage clé 3</li>
        </ul>
      </section>
  
      <section className="temoignages mb-5">
        <h2 className="text-center">Ce que disent nos utilisateurs</h2>
        <div className="temoignage text-center">
          <p>[PaiePilot m'a aidé à développer des compétences nécessaires pour me conformer à la réglementation Béninoise . Je vous le recommande vivement]</p>
          <cite>Jean</cite>
        </div>
      </section>
  
      <section className="appel-final text-center mb-5">
        <h2>Prêt à découvrir PaiePilot ?</h2>
        <p>N'attendez plus et rejoingnez notre communauté</p>
        <button className="cta-primary btn btn-warning">S'inscrire</button>
      </section>
    </main>
  </div>
  
  </>
    )
  }
  
  export default Home;