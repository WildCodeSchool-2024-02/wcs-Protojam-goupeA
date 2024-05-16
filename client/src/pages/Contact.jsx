import { useState } from "react";
import Popup from "../components/Popup";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const togglePopup = () => {
    if (
      contactForm.firstName !== "" &&
      contactForm.email !== "" &&
      contactForm.lastName !== "" &&
      contactForm.message !== ""
    ) {
      setShowPopup(true);
    }
  };

  const togglePopupClose = () => {
    setShowPopup(false);
    setContactForm({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <section className="backgroundimage" id="backgroundimage">
        <h1 className="titleform">Laisser un commentaire</h1>
      </section>

      <form onSubmit={(event) => event.preventDefault()}>
        <input
          className="nom-container"
          required
          placeholder="Nom*"
          name="lastName"
          value={contactForm.lastName}
          onChange={(e) => handleChangeForm(e)}
        />

        <input
          className="prenom-container"
          required
          placeholder="Prénom*"
          name="firstName"
          value={contactForm.firstName}
          onChange={(e) => handleChangeForm(e)}
        />

        <input
          className="mail-container"
          required
          placeholder="Mail*"
          name="email"
          value={contactForm.email}
          onChange={(e) => handleChangeForm(e)}
        />

        <textarea
          required
          className="textarea-container"
          placeholder="Ecrivez votre Message*"
          name="message"
          id="messagearea"
          cols="3"
          rows="10"
          value={contactForm.message}
          onChange={(e) => handleChangeForm(e)}
        />

        <button className="button" type="submit" onClick={togglePopup}>
          Envoyez votre demande
        </button>
      </form>

      {showPopup && (
        <div className="popupContainer">
          <Popup />
          <button
            className="closePopup"
            type="submit"
            onClick={togglePopupClose}
          >
            Confirmer
          </button>
        </div>
      )}
    </div>
  );
}

export default Contact;
