// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function Inscription() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     nomEntreprise: '',
//     emailEntreprise: '',
//     motDePasse: '',
//     numeroTelephone: '',
//     adresse: '',
//     numeroImmatriculation: '',
//     numeroIdentificationFiscale: '',
//     formeJuridique: '',
//     secteurActivite: '',
//     siteWeb: '',
//     nomPersonneContact: '',
//     emailPersonneContact: '',
//     telephonePersonneContact: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const payload = {
//         companyName: formData.nomEntreprise,
//         companyEmail: formData.emailEntreprise,
//         password: formData.motDePasse,
//         phoneNumber: formData.numeroTelephone,
//         address: formData.adresse,
//         registrationNumber: formData.numeroImmatriculation,
//         taxIdentificationNumber: formData.numeroIdentificationFiscale,
//         legalForm: formData.formeJuridique,
//         sectorOfActivity: formData.secteurActivite,
//         website: formData.siteWeb,
//         contactPersonName: formData.nomPersonneContact,
//         contactPersonEmail: formData.emailPersonneContact,
//         contactPersonPhone: formData.telephonePersonneContact,
//       };

//       const response = await axios.post('https://api-paiepilot-2.onrender.com/api/auth/register', payload);
//       alert('Inscription réussie !');
//       navigate('/connexion');
//     } catch (error) {
//       alert("Erreur lors de l'inscription : " + (error.response?.data?.message || error.message));
//       console.log('Erreur complète reçue :', error.response);

//     }
//   };

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-8">
//           <div className="p-4 shadow rounded bg-white">
//             <h3 className="text-center mb-4">Inscription</h3>
//             <form onSubmit={handleSubmit}>
//               <div className="row">
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Nom de l'entreprise</label>
//                   <input type="text" className="form-control" name="nomEntreprise" value={formData.nomEntreprise} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Adresse e-mail</label>
//                   <input type="email" className="form-control" name="emailEntreprise" value={formData.emailEntreprise} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Mot de passe</label>
//                   <input type="password" className="form-control" name="motDePasse" value={formData.motDePasse} onChange={handleChange} required />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Téléphone</label>
//                   <input type="text" className="form-control" name="numeroTelephone" value={formData.numeroTelephone} onChange={handleChange}  />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Adresse</label>
//                   <input type="text" className="form-control" name="adresse" value={formData.adresse} onChange={handleChange}  />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Numéro d'immatriculation</label>
//                   <input type="text" className="form-control" name="numeroImmatriculation" value={formData.numeroImmatriculation} onChange={handleChange} />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Numéro d'identification fiscale</label>
//                   <input type="text" className="form-control" name="numeroIdentificationFiscale" value={formData.numeroIdentificationFiscale} onChange={handleChange}  />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Forme juridique</label>
//                   <input type="text" className="form-control" name="formeJuridique" value={formData.formeJuridique} onChange={handleChange}  />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Secteur d'activité</label>
//                   <input type="text" className="form-control" name="secteurActivite" value={formData.secteurActivite} onChange={handleChange}  />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Site web</label>
//                   <input type="text" className="form-control" name="siteWeb" value={formData.siteWeb} onChange={handleChange} />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Nom de la personne de contact</label>
//                   <input type="text" className="form-control" name="nomPersonneContact" value={formData.nomPersonneContact} onChange={handleChange}  />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Email de la personne de contact</label>
//                   <input type="email" className="form-control" name="emailPersonneContact" value={formData.emailPersonneContact} onChange={handleChange} />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Téléphone de la personne de contact</label>
//                   <input type="text" className="form-control" name="telephonePersonneContact" value={formData.telephonePersonneContact} onChange={handleChange}  />
//                 </div>
//               </div>
//               <button type="submit" className="btn btn-success w-100">S'inscrire</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Inscription;














import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Inscription() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nomEntreprise: '',
    emailEntreprise: '',
    motDePasse: '',
    numeroTelephone: '',
    adresse: '',
    numeroImmatriculation: '',
    numeroIdentificationFiscale: '',
    formeJuridique: '',
    secteurActivite: '',
    siteWeb: '',
    nomPersonneContact: '',
    emailPersonneContact: '',
    telephonePersonneContact: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        companyName: formData.nomEntreprise,
        companyEmail: formData.emailEntreprise,
        password: formData.motDePasse,
        phoneNumber: formData.numeroTelephone,
        address: formData.adresse,
        registrationNumber: formData.numeroImmatriculation,
        taxIdentificationNumber: formData.numeroIdentificationFiscale,
        legalForm: formData.formeJuridique,
        sectorOfActivity: formData.secteurActivite,
        website: formData.siteWeb,
        contactPersonName: formData.nomPersonneContact,
        contactPersonEmail: formData.emailPersonneContact,
        contactPersonPhone: formData.telephonePersonneContact,
      };

      const response = await axios.post('https://api-paiepilot-2.onrender.com/api/auth/register', payload);
      const { token, nom } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('nomUtilisateur', nom);

      navigate('/dashboard');
    } catch (error) {
      alert("Erreur lors de l'inscription : " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="p-4 shadow rounded bg-white">
            <h3 className="text-center mb-4">Inscription</h3>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">Nom de l'entreprise</label>
                  <input type="text" className="form-control" name="nomEntreprise" value={formData.nomEntreprise} onChange={handleChange} required />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Adresse e-mail</label>
                  <input type="email" className="form-control" name="emailEntreprise" value={formData.emailEntreprise} onChange={handleChange} required />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Mot de passe</label>
                  <input type="password" className="form-control" name="motDePasse" value={formData.motDePasse} onChange={handleChange} required />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Téléphone</label>
                  <input type="text" className="form-control" name="numeroTelephone" value={formData.numeroTelephone} onChange={handleChange} />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">Adresse</label>
                  <input type="text" className="form-control" name="adresse" value={formData.adresse} onChange={handleChange} />
                </div>
              </div>
              <button type="submit" className="btn btn-success w-100">S'inscrire</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
