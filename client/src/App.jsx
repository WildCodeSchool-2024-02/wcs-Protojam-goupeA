import { NavLink, Outlet } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Acceuil</NavLink>
        <NavLink to="/sejour">Nos échappées</NavLink>
        <NavLink to="/reservation">Réservation</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
