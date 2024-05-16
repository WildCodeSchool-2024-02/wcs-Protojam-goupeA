import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Popup from "../components/Popup";

function Reservation() {
  const bidon = useLoaderData();
  console.info(bidon);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopupClose = () => {
    setShowPopup(false);
  };

  const reservation = () => {
    setShowPopup(true);
  };

  return (
    <section className="resa-container">
      <h2>Confirmation reservation {bidon[0].vip}</h2>
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
