// import React from 'react'

// function Footer() {
//   return (
//     <footer className="bg-light text-center py-3 mt-auto">
//       <div className="container">
//         <p>&copy; {new Date().getFullYear()} PaiePilot. Tous droits réservés.</p>
//       </div>
//     </footer>
//   );
// }
// export default Footer

import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-auto">
      <div className="container">
        <p className="mb-2">&copy; {new Date().getFullYear()} <strong>PaiePilot</strong>. Tous droits réservés.</p>
        <div className="d-flex justify-content-center gap-3">
          <Link to="/contact" className="text-light text-decoration-none">
            Contact
          </Link>
          <span>|</span>
          <Link to="/mentions-legales" className="text-light text-decoration-none">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

