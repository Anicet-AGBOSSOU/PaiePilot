import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver'; // Utilisation de FileSaver
import 'bootstrap/dist/css/bootstrap.min.css';

const Paie = () => {
  const [nomEmploye, setNomEmploye] = useState('');
  const [poste, setPoste] = useState('');
  const [matricule, setMatricule] = useState('');
  const [employeur, setEmployeur] = useState('');
  const [rccm, setRccm] = useState('');
  const [ifu, setIfu] = useState('');
  const [bp, setBp] = useState('');
  const [periode, setPeriode] = useState('');

  const [salaireBase, setSalaireBase] = useState(0);
  const [heuresSup, setHeuresSup] = useState('');
  const [prime, setPrime] = useState(0);
  const [avantages, setAvantages] = useState(0);
  const [avance, setAvance] = useState(0);
  const [cnssOuvriere, setCnssOuvriere] = useState(3.6);
  const [cnssPatronal, setCnssPatronal] = useState(17.4); // Taux de cotisation patronale à 17,4%

  // Calcul du salaire brut
  const salaireBrut = parseFloat(salaireBase) + parseFloat(prime) + parseFloat(heuresSup || 0) + parseFloat(avantages);
  
  // Calcul du salaire brut arrondi au millier inférieur
  const salaireBrutArrondi = Math.floor(salaireBrut / 1000) * 1000;

  // Calcul des retenues
  const retenueCNSSOuvriere = (salaireBrut * cnssOuvriere) / 100;
  const retenueCNSSPatronal = (salaireBrut * cnssPatronal) / 100;
  const retenueITS = calculerITS(salaireBrutArrondi);
  const retenueVPS = Math.ceil((salaireBrutArrondi * 0.04) / 1000) * 1000;
  const totalRetenues = retenueCNSSOuvriere + retenueCNSSPatronal + retenueITS + retenueVPS + parseFloat(avance || 0);
  const netAPayer = salaireBrut - totalRetenues;

  // Fonction pour calculer l'ITS
  function calculerITS(salaire) {
    if (salaire <= 60000) return 0;
    if (salaire <= 150000) return (salaire - 60000) * 0.1;
    if (salaire <= 250000) return 9000 + (salaire - 150000) * 0.15;
    if (salaire <= 500000) return 24000 + (salaire - 250000) * 0.01;
    return 26500 + (salaire - 500000) * 0.3;
  }

  // Fonction pour télécharger le PDF avec FileSaver
  const telechargerPDF = () => {
    const element = document.getElementById('bulletin-paie');

    // Vérifie si l'élément existe
    if (element) {
      // Utilisation de html2canvas pour capturer l'élément HTML
      html2canvas(element, {
        scale: 2, // Améliorer la qualité de l'image capturée
      }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const doc = new jsPDF();
        
        // Calculer la taille de l'image pour le PDF
        const imgWidth = 210; // largeur A4 en mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // calcul de la hauteur en fonction du ratio

        // Ajouter l'image au PDF
        doc.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);

        // Sauvegarder le fichier PDF
        doc.save(`Bulletin_${nomEmploye}_${periode}.pdf`);

        // Utilisation de FileSaver pour garantir le téléchargement
        const pdfBlob = doc.output('blob');
        saveAs(pdfBlob, `Bulletin_${nomEmploye}_${periode}.pdf`);
      }).catch((error) => {
        console.error('Erreur lors de la génération du PDF:', error);
      });
    } else {
      alert("Erreur : L'élément bulletin de paie n'a pas été trouvé.");
    }
  };

  // Ajout de l'état pour afficher ou non le bulletin
  const [afficherBulletin, setAfficherBulletin] = useState(false);

  // Fonction pour afficher/masquer le résumé de la paie
  const visualiserBulletin = () => {
    setAfficherBulletin(!afficherBulletin); // Alterner la visibilité du bulletin
  };

  return (
    <div className="container py-4">
      <div className="bg-primary text-white p-3 rounded mb-4">
        <h2 className="m-0">Simulateur de Paie - PaiePilot</h2>
      </div>

      <div className="card mb-3">
        <div className="card-header bg-secondary text-white">Informations Employé</div>
        <div className="card-body">
          <div className="mb-2">
            <label className="form-label">Employé :</label>
            <input className="form-control" placeholder="Nom de l'employé" value={nomEmploye} onChange={e => setNomEmploye(e.target.value)} />
          </div>
          <div className="mb-2">
            <label className="form-label">Poste :</label>
            <input className="form-control" placeholder="Poste" value={poste} onChange={e => setPoste(e.target.value)} />
          </div>
          <div className="mb-2">
            <label className="form-label">Matricule :</label>
            <input className="form-control" placeholder="Matricule" value={matricule} onChange={e => setMatricule(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header bg-secondary text-white">Informations Employeur</div>
        <div className="card-body">
          <div className="mb-2">
            <label className="form-label">Employeur :</label>
            <input className="form-control" placeholder="Nom de l'employeur" value={employeur} onChange={e => setEmployeur(e.target.value)} />
          </div>
          <div className="mb-2">
            <label className="form-label">RCCM :</label>
            <input className="form-control" placeholder="RCCM" value={rccm} onChange={e => setRccm(e.target.value)} />
          </div>
          <div className="mb-2">
            <label className="form-label">IFU :</label>
            <input className="form-control" placeholder="IFU" value={ifu} onChange={e => setIfu(e.target.value)} />
          </div>
          <div className="mb-2">
            <label className="form-label">Boîte Postale (BP) :</label>
            <input className="form-control" placeholder="BP" value={bp} onChange={e => setBp(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header bg-info text-white">Éléments de Salaire</div>
        <div className="card-body">
          <div className="mb-2">
            <label className="form-label">Salaire de base :</label>
            <input className="form-control" type="number" placeholder="Salaire de base" value={salaireBase} onChange={e => setSalaireBase(Number(e.target.value))} />
          </div>
          <div className="mb-2">
            <label className="form-label">Heures supplémentaires :</label>
            <input className="form-control" type="number" placeholder="Montant des heures supplémentaires" value={heuresSup} onChange={e => setHeuresSup(e.target.value)} />
          </div>
          <div className="mb-2">
            <label className="form-label">Primes :</label>
            <input className="form-control" type="number" placeholder="Primes" value={prime} onChange={e => setPrime(Number(e.target.value))} />
          </div>
          <div className="mb-2">
            <label className="form-label">Avantages en nature :</label>
            <input className="form-control" type="number" placeholder="Avantages en nature" value={avantages} onChange={e => setAvantages(Number(e.target.value))} />
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header bg-warning">Retenues</div>
        <div className="card-body">
          <div className="mb-2">
            <label className="form-label">Retenue CNSS Ouvrière (3.6%) :</label>
            <input className="form-control" value={retenueCNSSOuvriere.toFixed(2)} readOnly />
          </div>
          <div className="mb-2">
            <label className="form-label">Retenue CNSS Patronale ({cnssPatronal}%) :</label>
            <input className="form-control" value={retenueCNSSPatronal.toFixed(2)} readOnly />
          </div>
          <div className="mb-2">
            <label className="form-label">Retenue ITS :</label>
            <input className="form-control" value={retenueITS.toFixed(2)} readOnly />
          </div>
          <div className="mb-2">
            <label className="form-label">Retenue VPS :</label>
            <input className="form-control" value={retenueVPS.toFixed(2)} readOnly />
          </div>
          <div className="mb-2">
            <label className="form-label">Avance reçue :</label>
            <input className="form-control" type="number" value={avance} onChange={e => setAvance(Number(e.target.value))} />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <button className="btn btn-primary" onClick={telechargerPDF}>Télécharger en PDF</button>
        <button className="btn btn-secondary ml-2" onClick={visualiserBulletin}>Visualiser</button>
      </div>

      {/* Affichage conditionnel du résumé de la paie */}
      {afficherBulletin && (
        <div id="bulletin-paie" className="card mb-3">
          <div className="card-header bg-success text-white">Résumé de la Paie</div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Éléments</th>
                    <th>Montant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Employé</strong></td>
                    <td>{nomEmploye}</td>
                  </tr>
                  <tr>
                    <td><strong>Poste</strong></td>
                    <td>{poste}</td>
                  </tr>
                  <tr>
                    <td><strong>Matricule</strong></td>
                    <td>{matricule}</td>
                  </tr>
                  <tr>
                    <td><strong>Employeur</strong></td>
                    <td>{employeur}</td>
                  </tr>
                  <tr>
                    <td><strong>RCCM</strong></td>
                    <td>{rccm}</td>
                  </tr>
                  <tr>
                    <td><strong>IFU</strong></td>
                    <td>{ifu}</td>
                  </tr>
                  <tr>
                    <td><strong>BP</strong></td>
                    <td>{bp}</td>
                  </tr>
                  <tr>
                    <td><strong>Salaire Brut</strong></td>
                    <td>{salaireBrut.toFixed(2)} XOF</td>
                  </tr>
                  <tr>
                    <td><strong>Total Retenues</strong></td>
                    <td>{totalRetenues.toFixed(2)} XOF</td>
                  </tr>
                  <tr>
                    <td><strong>Net à Payer</strong></td>
                    <td>{netAPayer.toFixed(2)} XOF</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Paie;
