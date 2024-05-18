import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

function Sejour() {
  const celebrities = useLoaderData();

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`https://wcs-protojam-goupea.onrender.com/journey`)
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((error) => console.error(error));
  }, []);

  const [filterChoice, setFilterChoice] = useState("");

  return (
    <section>
      <h2>Nos Échappées</h2>
      <div className="bloc">
        <div className="select">
          <select onChange={(e) => setFilterChoice(e.target.value)}>
            <option value="">Tout</option>

            {datas?.journeys?.map((categ) => (
              <option key={categ.id}>
                {console.info(filterChoice)}
                {categ.name}
              </option>
            ))}
          </select>
        </div>
        {/* split visuel */}
      </div>
      <div className="category-container">
        <div>
          <div className="sousCategorie-container">
            {celebrities.map((sousCat) => (
              <div className="echappe-container" key={sousCat.id}>
                div
                <Link to={`./${sousCat.name}`} className="sous-categorie-link">
                  <img
                    className="img-container"
                    src={sousCat.url}
                    alt={sousCat.name}
                  />
                  <h3>{sousCat.name}</h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sejour;
