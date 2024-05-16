import { NavLink, Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <header className="header-container">

        <img className="logo" src={logo} alt="logo" />
        <h1 className="titre-h1">Échappée Célébrement Fantasque</h1>
        <div>
          <h6>none</h6>
        </div>

       
      </header>
      <nav>
        <NavLink to="/">Acceuil</NavLink>
        <NavLink to="/sejour">Nos échappées</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
