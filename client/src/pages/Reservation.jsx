import { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";

const bidon = [
  {
    cat: "Foret",
    vip: "Balou",
    activity: "Accrobranche",
    condition: "Joyeux",
  },
];

function Reservation() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopupClose = () => {
    setShowPopup(false);
  };

  const reservation = () => {
    setShowPopup(true);
  };

  return (
    <section>
      <h2>Reserver {bidon[0].cat}</h2>
      <p>
        Vous souhaitez reserver le voyage avec {bidon[0].vip} afin de profiter
        de l'activite {bidon[0].activity} !
      </p>
      <p>Je consens aux conditions: {bidon[0].condition}</p>
      <button type="submit" onClick={reservation}>
        Reserver
      </button>
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
