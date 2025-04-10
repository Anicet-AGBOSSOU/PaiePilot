import React from 'react'

function Footer() {
  return (
    <footer className="bg-light text-center py-3 mt-auto">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} PaiePilot. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
export default Footer