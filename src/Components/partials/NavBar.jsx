// import React from "react";
// import { NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css'



// function NavBar() {
//   const getNavLinkClass = ({ isActive }) =>
//     `nav-link fw-bold ${isActive ? 'text-warning' : 'text-white'}`;

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand text-warning fw-bold" to="/">
//           PaiePilot
//         </NavLink>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse justify-content-around" id="navbarNav">
//           <ul className="navbar-nav w-100 d-flex justify-content-around">
//             {/* <li className="nav-item">
//               <NavLink to="/gestion-employes" className={getNavLinkClass}>
//                 Gestion des Employés
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/declaration-fiscale" className={getNavLinkClass}>
//                 Déclarations Fiscales et sociales
//               </NavLink>
//             </li> */}
//             {/* <li className="nav-item">
//               <NavLink to="/declaration-sociale" className={getNavLinkClass}>
//                 Déclaration Sociale
//               </NavLink>
//             </li> */}
//             {/* <li className="nav-item">
//               <NavLink to="/calcul-salaire" className={getNavLinkClass}>
//                  Salaire et Bulletin de Paie
//               </NavLink>
//             </li> */}
//             <li className="nav-item">
//               <NavLink to="/bulletin-paie" className={getNavLinkClass}>
//                 Bulletin de Paie
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/inscription" className={getNavLinkClass}>
//                 Inscription
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/connexion" className={getNavLinkClass}>
//                 Connexion
//               </NavLink>
//             </li>

//             {/* <li className="nav-item">
//               <NavLink to="/dashboard" className={getNavLinkClass}>
//                 Tableau de Bord
//               </NavLink>
//             </li> */}

//             <li className="nav-item">
//               <NavLink to="/about" className={getNavLinkClass}>
//                 À-Propos
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

//   export default NavBar;



import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/connexion");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
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

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            {/* Accueil (toujours visible) */}
            <li className="nav-item fw-bold">
              <Link className="nav-link" to="/">Accueil</Link>
            </li>

            {/* Si connecté */}
            {token ? (
              <>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Gestion
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/dashboard">Tableau de bord</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/gestion-employes">Employés</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/calcul-salaire">Salaire</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/bulletin-paie">Fiche de paie</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/declaration-fiscale">Déclaration fiscale</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/declaration-sociale">Déclaration sociale</Link>
                    </li>
                    {/* <li>
                      <Link className="dropdown-item" to="/setting">Paramètres</Link>
                    </li> */}
                  </ul>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-light ms-2" onClick={handleLogout}>
                    Déconnexion
                  </button>
                </li>
              </>
            ) : (
              <>
                {/* Si pas connecté */}
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/about">À propos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/mentions-legales">Mentions légales</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fw-bold" to="/connexion">Connexion</Link>
                </li>
                <li className="nav-item fw-bold">
                  <Link className="btn btn-outline-light ms-2" to="/inscription">
                    S’inscrire
                  </Link>
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
