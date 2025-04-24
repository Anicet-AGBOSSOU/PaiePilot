// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// function NavBar() {
//   const token = localStorage.getItem("token");
//   const user = JSON.parse(localStorage.getItem("user")); // Assure-toi que tu stockes l'utilisateur lors de la connexion
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/connexion");
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
//       <div className="container">
//         <Link className="navbar-brand text-white fw-bold" to="/">
//           PaiePilot
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>

//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav align-items-center">
//             <li className="nav-item">
//               <Link className="nav-link text-white fw-bold" to="/">Accueil</Link>
//             </li>

//             {!token ? (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white fw-bold" to="/about">À propos</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white fw-bold" to="/contact">Contact</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white fw-bold" to="/mentions-legales">Mentions légales</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link text-white fw-bold" to="/connexion">Connexion</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="btn btn-outline-light ms-2 fw-bold" to="/inscription">S’inscrire</Link>
//                 </li>
//               </>
//             ) : (
//               <>
//                 <li className="nav-item dropdown">
//                   <span
//                     className="nav-link dropdown-toggle text-white fw-bold"
//                     role="button"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     Gestion
//                   </span>
//                   <ul className="dropdown-menu">
//                     <li><Link className="dropdown-item" to="/dashboard">Tableau de bord</Link></li>
//                     <li><Link className="dropdown-item" to="/gestion-employes">Employés</Link></li>
//                     <li><Link className="dropdown-item" to="/calcul-salaire">Salaire</Link></li>
//                     <li><Link className="dropdown-item" to="/bulletin-paie">Fiche de paie</Link></li>
//                     <li><Link className="dropdown-item" to="/declaration-fiscale">Déclaration fiscale</Link></li>
//                     <li><Link className="dropdown-item" to="/declaration-sociale">Déclaration sociale</Link></li>
//                   </ul>
//                 </li>
//                 <li className="nav-item">
//                   <span className="nav-link text-white fw-bold">
//                      {user?.nom || "Welcome"}
//                   </span>
//                 </li>
//                 <li className="nav-item">
//                   <button className="btn btn-outline-light ms-2 fw-bold" onClick={handleLogout}>
//                     Déconnexion
//                   </button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;




import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const token = localStorage.getItem("token");
  const companyId = localStorage.getItem("companyId"); // Récupère l'ID de l'entreprise depuis localStorage
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("companyId"); // Retire l'ID de l'entreprise lors de la déconnexion
    navigate("/connexion");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
      <div className="container">
        <Link className="navbar-brand text-white fw-bold" to="/">
          PaiePilot
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-white fw-bold" to="/">Accueil</Link>
            </li>

            {!token ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold" to="/about">À propos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold" to="/mentions-legales">Mentions légales</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bold" to="/connexion">Connexion</Link>
                </li>
                <li className="nav-item">
                  <Link className="btn btn-outline-light ms-2 fw-bold" to="/inscription">S’inscrire</Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle text-white fw-bold"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gestion de Paie
                  </span>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/dashboard">Tableau de bord</Link></li>
                    <li><Link className="dropdown-item" to="/gestion-employes">Gestion des Employés</Link></li>
                    <li><Link className="dropdown-item" to="/declaration-fiscale">Déclarations Fiscales et Sociales</Link></li>
                    <li><Link className="dropdown-item" to="/bulletin-paie">Salaires et Bulletin de Paie</Link></li>
                    {/* <li><Link className="dropdown-item" to="/bulletin-paie">Fiche de paie</Link></li> */}
                    
                    {/* <li><Link className="dropdown-item" to="/declaration-sociale">Déclaration sociale</Link></li> */}
                  </ul>
                </li>
                <li className="nav-item">
                  <span className="nav-link text-white fw-bold">
                    Bienvenu: {companyId || "Non défini"}  {/* Affiche l'ID de l'entreprise */}
                  </span>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-2 fw-bold" onClick={handleLogout}>
                    Déconnexion
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

