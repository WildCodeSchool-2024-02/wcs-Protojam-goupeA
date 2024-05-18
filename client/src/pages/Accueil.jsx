import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Acceuil() {
  const [datas, setDatas] = useState([
    {
      id: 1,
      name: "Forêt",
      url: "https://echappee-celebrement-fantasque.netlify.app/assets/vue-fascinante-foret-par-journee-ensoleillee-montanges-france-DChjSNJQ.jpg",
    },
  ]);

  useEffect(() => {
    fetch(`https://wcs-protojam-goupea.onrender.com/journey`)
      .then((response) => response.json())
      .then((data) => setDatas(data.journeys))
      .catch((error) => console.error(error));
  }, []);

  console.info(datas);

  const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  return (
    <>
      <h2>Accueil</h2>
      <div className="cards-container">
        {datas.map((categorie) => (
          <Link
            to={`categorie/${removeAccents(categorie.name.toLowerCase())}`}
            className="categorie-container"
            key={categorie.name}
          >
            <img
              className="categorie-img"
              src={categorie.url}
              alt={categorie.name}
            />
            <h2>{categorie.name}</h2>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Acceuil;
