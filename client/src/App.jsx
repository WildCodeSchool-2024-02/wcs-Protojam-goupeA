import { NavLink, Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";

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
      <Footer />
    </>
  );
}

export default App;
