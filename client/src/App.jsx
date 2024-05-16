import { NavLink, Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <header className="header-container">
        <h1 className="titre-h1">Échappée Célébrement Fantasque</h1>
      </header>
      <nav>
        <NavLink to="/">Acceuil</NavLink>
        <NavLink to="/sejour">Nos échappées</NavLink>
        <NavLink to="/reservation">Réservation</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
