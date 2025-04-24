
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
  const [nombreEnfants, setNombreEnfants] = useState(0); // Nouveau champ
  const [situationMatrimoniale, setSituationMatrimoniale] = useState(''); // Nouveau champ
  const [dateDebutTravail, setDateDebutTravail] = useState(''); // Nouveau champ
  const [salaireBase, setSalaireBase] = useState(0);
  const [heuresSup, setHeuresSup] = useState('');
  const [prime, setPrime] = useState(0);
  const [avantages, setAvantages] = useState(0);
  const [avance, setAvance] = useState(0);
  const [cnssOuvriere, setCnssOuvriere] = useState(3.6);

  // Calcul du salaire brut
  const salaireBrut = parseFloat(salaireBase) + parseFloat(prime) + parseFloat(heuresSup || 0) + parseFloat(avantages);

  // Calcul du salaire brut arrondi au millier inférieur
  const salaireBrutArrondi = Math.floor(salaireBrut / 1000) * 1000;

  // Calcul des retenues
  const retenueCNSSOuvriere = (salaireBrut * cnssOuvriere) / 100;
  const retenueITS = calculerITS(salaireBrutArrondi);
  const totalRetenues = retenueCNSSOuvriere + retenueITS + parseFloat(avance || 0);
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
          <div className="mb-2">
            <label className="form-label">Nombre d'enfants :</label>
            <input className="form-control" type="number" value={nombreEnfants} onChange={e => setNombreEnfants(Number(e.target.value))} />
          </div>
          <div className="mb-2">
            <label className="form-label">Situation matrimoniale :</label>
            <select className="form-control" value={situationMatrimoniale} onChange={e => setSituationMatrimoniale(e.target.value)}>
              <option value="">Sélectionner</option>
              <option value="Célibataire">Célibataire</option>
              <option value="Marié">Marié</option>
              <option value="Divorcé">Divorcé</option>
              <option value="Veuf(ve)">Veuf(ve)</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="form-label">Date de début de travail :</label>
            <input className="form-control" type="date" value={dateDebutTravail} onChange={e => setDateDebutTravail(e.target.value)} />
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
          <div className="mb-2">
            <label className="form-label">Période :</label>
            <input className="form-control" placeholder="Période (mois)" value={periode} onChange={e => setPeriode(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-header bg-info text-white">Éléments de Calcul</div>
        <div className="card-body">
          <div className="mb-2">
            <label className="form-label">Salaire de base :</label>
            <input className="form-control" type="number" value={salaireBase} onChange={e => setSalaireBase(Number(e.target.value))} />
          </div>
          <div className="mb-2">
            <label className="form-label">Heures supplémentaires :</label>
            <input className="form-control" type="number" value={heuresSup} onChange={e => setHeuresSup(e.target.value)} />
          </div>
          <div className="mb-2">
            <label className="form-label">Primes :</label>
            <input className="form-control" type="number" value={prime} onChange={e => setPrime(Number(e.target.value))} />
          </div>
          <div className="mb-2">
            <label className="form-label">Avantages :</label>
            <input className="form-control" type="number" value={avantages} onChange={e => setAvantages(Number(e.target.value))} />
          </div>
        </div>
      </div>

      <div>
        <button className="btn btn-success mb-3" onClick={telechargerPDF}>Télécharger le Bulletin de Paie</button>
      </div>

      <div>
        <button className="btn btn-info mb-3" onClick={visualiserBulletin}>
          {afficherBulletin ? 'Masquer' : 'Visualiser'} le bulletin de paie
        </button>

        {afficherBulletin && (
          <div id="bulletin-paie" className="mt-4">
            <h3 className="text-center mb-4">Bulletin de Paie pour {nomEmploye} - {periode}</h3>

            <div className="row mb-4">
              <div className="col-6">
                <h5>Informations Employé</h5>
                <table className="table table-striped table-bordered">
                  <tbody>
                    <tr>
                      <td><strong>Nom :</strong></td>
                      <td>{nomEmploye}</td>
                    </tr>
                    <tr>
                      <td><strong>Poste :</strong></td>
                      <td>{poste}</td>
                    </tr>
                    <tr>
                      <td><strong>Matricule :</strong></td>
                      <td>{matricule}</td>
                    </tr>
                    <tr>
                      <td><strong>Nombre d'enfants :</strong></td>
                      <td>{nombreEnfants}</td>
                    </tr>
                    <tr>
                      <td><strong>Situation matrimoniale :</strong></td>
                      <td>{situationMatrimoniale}</td>
                    </tr>
                    <tr>
                      <td><strong>Date de début de travail :</strong></td>
                      <td>{dateDebutTravail}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col-6">
                <h5>Informations Employeur</h5>
                <table className="table table-striped table-bordered">
                  <tbody>
                    <tr>
                      <td><strong>Employeur :</strong></td>
                      <td>{employeur}</td>
                    </tr>
                    <tr>
                      <td><strong>RCCM :</strong></td>
                      <td>{rccm}</td>
                    </tr>
                    <tr>
                      <td><strong>IFU :</strong></td>
                      <td>{ifu}</td>
                    </tr>
                    <tr>
                      <td><strong>Boîte Postale :</strong></td>
                      <td>{bp}</td>
                    </tr>
                    <tr>
                      <td><strong>Période :</strong></td>
                      <td>{periode}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h5 className="mb-3">Détails du Salaire</h5>
            <table className="table table-striped table-bordered">
              <tbody>
                <tr>
                  <td><strong>Salaire de base :</strong></td>
                  <td>{salaireBase} FCFA</td>
                </tr>
                <tr>
                  <td><strong>Heures Supplémentaires :</strong></td>
                  <td>{heuresSup} FCFA</td>
                </tr>
                <tr>
                  <td><strong>Primes :</strong></td>
                  <td>{prime} FCFA</td>
                </tr>
                <tr>
                  <td><strong>Avantages :</strong></td>
                  <td>{avantages} FCFA</td>
                </tr>
                <tr>
                  <td><strong>Total Salaire Brut :</strong></td>
                  <td>{salaireBrut} FCFA</td>
                </tr>
                <tr>
                  <td><strong>Salaire Brut Arrondi :</strong></td>
                  <td>{salaireBrutArrondi} FCFA</td>
                </tr>
                <tr>
                  <td><strong>Retenue CNSS :</strong></td>
                  <td>{retenueCNSSOuvriere.toFixed(2)} FCFA</td>
                </tr>
                <tr>
                  <td><strong>Retenue ITS :</strong></td>
                  <td>{retenueITS.toFixed(2)} FCFA</td>
                </tr>
                <tr>
                  <td><strong>Avance :</strong></td>
                  <td>{avance} FCFA</td>
                </tr>
                <tr>
                  <td><strong>Salaire Net à Payer :</strong></td>
                  <td>{netAPayer.toFixed(2)} FCFA</td>
                </tr>
              </tbody>
            </table>
            <small className="text-muted fst-italic text-center mt-5">
              Téléchargé sur le site de <span className="fw-bold text-primary">PaiePilot</span>
             </small>
          </div>
          
          
        )}
        <div className="text-center mt-5">
              <small className="text-muted fst-italic">
              Téléchargé sur le site de <span className="fw-bold text-primary">PaiePilot</span>
             </small>
       </div>

      </div>
    </div>
  );
};

export default Paie;

