

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

//   const [message, setMessage] = useState({ type: '', text: '' });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage({ type: '', text: '' });

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
//       const { token, companyId } = response.data;
//       localStorage.setItem('token', token);
//       localStorage.setItem("companyId", companyId); // Stockage de l'ID de l'entreprise


//       setMessage({ type: 'success', text: 'Inscription réussie ! Redirection...' });

//       setTimeout(() => {
//         navigate('/dashboard');
//       }, 1500);
//     } catch (error) {
//       setMessage({
//         type: 'danger',
//         text: "Erreur lors de l'inscription : " + (error.response?.data?.message || error.message),
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-lg-8">
//           <div className="p-4 shadow rounded bg-white">
//             <h3 className="text-center mb-4">Inscription</h3>

//             {message.text && (
//               <div className={`alert alert-${message.type} alert-dismissible fade show`} role="alert">
//                 {message.text}
//                 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>
//               </div>
//             )}

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
//                   <input type="text" className="form-control" name="numeroTelephone" value={formData.numeroTelephone} onChange={handleChange} />
//                 </div>
//                 <div className="mb-3 col-md-6">
//                   <label className="form-label">Adresse</label>
//                   <input type="text" className="form-control" name="adresse" value={formData.adresse} onChange={handleChange} />
//                 </div>
//               </div>
//               <button type="submit" className="btn btn-success w-100" disabled={loading}>
//                 {loading ? 'Traitement...' : "S'inscrire"}
//               </button>
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
  });

  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const payload = {
        companyName: formData.nomEntreprise,
        companyEmail: formData.emailEntreprise,
        password: formData.motDePasse,
        phoneNumber: formData.numeroTelephone,
        address: formData.adresse,
      };

      const response = await axios.post('https://api-paiepilot-2.onrender.com/api/auth/register', payload);
      const { token, companyId } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('companyId', companyId);

      setMessage({ type: 'success', text: 'Inscription réussie ! Redirection...' });

      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } catch (error) {
      setMessage({
        type: 'danger',
        text: 'Erreur lors de l\'inscription : ' + (error.response?.data?.message || error.message),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="p-4 shadow rounded bg-white">
            <h3 className="text-center mb-4">Inscription</h3>

            {message.text && (
              <div className={`alert alert-${message.type} alert-dismissible fade show`} role="alert">
                {message.text}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label">Nom de l'entreprise</label>
                  <input
                    type="text"
                    className="form-control"
                    name="nomEntreprise"
                    value={formData.nomEntreprise}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label">Adresse e-mail</label>
                  <input
                    type="email"
                    className="form-control"
                    name="emailEntreprise"
                    value={formData.emailEntreprise}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label">Mot de passe</label>
                  <input
                    type="password"
                    className="form-control"
                    name="motDePasse"
                    value={formData.motDePasse}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label">Téléphone</label>
                  <input
                    type="tel"
                    className="form-control"
                    name="numeroTelephone"
                    value={formData.numeroTelephone}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-12 col-md-6">
                  <label className="form-label">Adresse</label>
                  <input
                    type="text"
                    className="form-control"
                    name="adresse"
                    value={formData.adresse}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button type="submit" className="btn btn-success w-100" disabled={loading}>
                {loading ? 'Traitement...' : "S'inscrire"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inscription;
