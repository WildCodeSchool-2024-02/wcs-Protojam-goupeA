import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import categories from "../data/categoriesData";

function Reservation() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const togglePopupClose = () => {
    setShowPopup(false);
  };

  const reservation = (subCategory) => {
    setSelectedSubCategory(subCategory);
    setShowPopup(true);
  };

  const firstSubCategories = categories.map(
    (category) => category.sousCategorie[0]
  );

  return (
    <section className="resa-container">
      <div>
        <h2>Confirmation réservation</h2>
        <p>
          Vous souhaitez réserver le voyage avec{" "}
          {selectedSubCategory
            ? selectedSubCategory.name
            : firstSubCategories[0].name}{" "}
          afin de profiter de l'activité{" "}
          {selectedSubCategory
            ? selectedSubCategory.activite
            : firstSubCategories[0].activite}{" "}
          !
        </p>
        <button
          type="submit"
          onClick={() => reservation(firstSubCategories[0])}
        >
          Réserver
        </button>
      </div>
      {showPopup && (
        <div className="popupContainer">
          <Popup />
          <Link to="/">
            <button
              className="closePopup"
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
