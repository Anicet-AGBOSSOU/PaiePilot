// import React, { useState } from 'react';

// function Contact() {
//   const [formSubmitted, setFormSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormSubmitted(true);
//     // Tu peux aussi envoyer les données ici si tu as un backend.
//   };

//   return (
//     <div className="container py-5">
//       <h2 className="text-center text-primary mb-4">Contactez-nous</h2>
//       <p className="text-center mb-4">
//         Une question, une remarque ou besoin d’aide ? N’hésitez pas à nous contacter.
//       </p>
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card shadow p-4">
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label className="form-label">Nom</label>
//                 <input type="text" className="form-control" placeholder="Votre nom" required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Email</label>
//                 <input type="email" className="form-control" placeholder="exemple@email.com" required />
//               </div>
//               <div className="mb-3">
//                 <label className="form-label">Message</label>
//                 <textarea className="form-control" rows="4" placeholder="Votre message..." required></textarea>
//               </div>
//               <button type="submit" className="btn btn-primary w-100">Envoyer</button>
//             </form>

//             {formSubmitted && (
//               <div className="alert alert-success mt-3 text-center" role="alert">
//                 Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;




import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_smgosys',     // Service ID
      'template_8ugq29r',    // Template ID
      formRef.current,
      'SiaBog7NGWnRzVyyF' // Clé publique
    )
    .then(() => {
      setFormSubmitted(true);
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('Erreur lors de l’envoi :', error);
      alert("Erreur lors de l'envoi du message.");
    });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-primary mb-4">Contactez-nous</h2>
      <p className="text-center mb-4">
        Une question, une remarque ou besoin d’aide ? N’hésitez pas à nous contacter.
      </p>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nom</label>
                <input type="text" name="name" className="form-control" placeholder="Votre nom" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" placeholder="exemple@email.com" required />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" rows="4" placeholder="Votre message..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Envoyer</button>
            </form>

            {formSubmitted && (
              <div className="alert alert-success mt-3 text-center" role="alert">
                Merci pour votre message ! Nous vous répondrons très bientôt.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
