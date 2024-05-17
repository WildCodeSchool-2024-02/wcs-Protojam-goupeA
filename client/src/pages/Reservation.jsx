import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import categories from "../data/categoriesData";

function Reservation() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopupClose = () => {
    setShowPopup(false);
  };

  const reservation = () => {
    setShowPopup(true);
  };

  const firstSubCategories = categories.map(
    (category) => category.sousCategorie[0]
  );

  return (
    <section className="resa-container">
      <h2>Confirmation réservation</h2>
      <p>
        Vous avez réserver votre voyage ! Toute l'équipe de Échappée Célébrement
        Fantasque vous remercie et vous souhaitons d'avance un excellent voyage
        !
      </p>
      <button type="submit" onClick={() => reservation(firstSubCategories[0])}>
        Réserver
      </button>

      {showPopup && (
        <div className="popupContainer">
          <Popup />
          <Link to="/">
            <button
              className="closePopupréservation"
              type="submit"
              onClick={togglePopupClose}
            >
              Confirmer
            </button>
          </Link>
        </div>
      )}
    </section>
  );
}

export default Reservation;
