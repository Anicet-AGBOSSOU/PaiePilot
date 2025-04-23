// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./Components/Home";
// import Employe from "./Components/Employe";
// import DFiscale from "./Components/DFiscale";
// import DSociale from "./Components/DSociale";
// import Salaire from "./Components/Salaire";
// import Paie from "./Components/Paie";
// import Inscription from "./Components/Inscription";
// import Connexion from "./Components/Connexion";
// import NavBar from "./Components/partials/NavBar";
// import SideBar from "./Components/partials/SideBar";
// import Footer from "./Components/partials/Footer";
// import About from "./Components/About";
// import NotFound from "./Components/NotFound";
// import Dashboard from "./Components/Dashboard";
// import Setting from "./Components/Setting";
// import Contact from "./Components/Contact";
// import MentionsLegales from "./Components/MentionsLegales";
// // import SideBar from "./Components/partials/SideBar";

// function App() {

//   return (
//     <Router>
//       <div className="d-flex flex-column min-vh-100">        
//       <NavBar />
//       {/* <SideBar /> */}
//       <div className="container mt-4">           
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/gestion-employes" element={<Employe />} />
//                 <Route path="/declaration-fiscale" element={<DFiscale />} />
//                 <Route path="/declaration-Sociale" element={<DSociale />} />
//                 <Route path="/calcul-salaire" element={<Salaire />} />
//                 <Route path="/bulletin-paie" element={<Paie />} />
//                 <Route path="/inscription" element={<Inscription />} />
//                 <Route path="/connexion" element={<Connexion />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/setting" element={<Setting />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="/mentions-legales" element={<MentionsLegales />} />


//                 <Route path="*" element={<NotFound />} />

//               </Routes>
            
          
//         </div>
//         <Footer />
//       </div>
//     </Router>
//   );
// }
// export default App;






import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Employe from "./Components/Employe";
import DFiscale from "./Components/DFiscale";
import DSociale from "./Components/DSociale";
import Salaire from "./Components/Salaire";
import Paie from "./Components/Paie";
import Inscription from "./Components/Inscription";
import Connexion from "./Components/Connexion";
import NavBar from "./Components/partials/NavBar";
import Footer from "./Components/partials/Footer";
import Dashboard from "./Components/Dashboard";
import NotFound from "./Components/NotFound";
import Setting from "./Components/Setting";
import Contact from "./Components/Contact";
import MentionsLegales from "./Components/MentionsLegales";
import About from "./Components/About";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true); // Si un token est présent, l'utilisateur est authentifié
    }
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <div className="container mt-4">
          <Routes>
            {/* Route publique */}
            <Route path="/" element={<Home />} />

            {/* Routes privées (protéger par connexion) */}
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/connexion" />}
            />
            <Route
              path="/gestion-employes"
              element={isAuthenticated ? <Employe /> : <Navigate to="/connexion" />}
            />
            <Route
              path="/declaration-fiscale"
              element={isAuthenticated ? <DFiscale /> : <Navigate to="/connexion" />}
            />
            <Route
              path="/declaration-Sociale"
              element={isAuthenticated ? <DSociale /> : <Navigate to="/connexion" />}
            />
            <Route
              path="/calcul-salaire"
              element={isAuthenticated ? <Salaire /> : <Navigate to="/connexion" />}
            />
            <Route
              path="/bulletin-paie"
              element={isAuthenticated ? <Paie /> : <Navigate to="/connexion" />}
            />

            {/* Routes publiques (pas besoin de connexion) */}
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/about" element={<About />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />

            {/* Page 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
