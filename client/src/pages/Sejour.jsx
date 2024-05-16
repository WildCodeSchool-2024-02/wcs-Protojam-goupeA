import { useState } from "react";
import { Link } from "react-router-dom";
import categories from "../data/categoriesData";

function Sejour() {
  const [filterChoice, setFilterChoice] = useState("");

  return (
    <section>
      <h1 className="titre-echappe">Nos Échappées</h1>
      <div className="bloc">
        <div className="select">
          <select onChange={(e) => setFilterChoice(e.target.value)}>
            <option value="">Tout</option>
            {categories.map((categ) => (
              <option key={categ.id}>{categ.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="category-container">
        {categories
          .filter(
            (categorie) => categorie.name === filterChoice || !filterChoice
          )
          .map((categorie) => (
            <div key={categorie.id}>
              <div className="sousCategorie-container">
                {categorie.sousCategorie.map((sousCat) => (
                  <div className="echappe-container" key={sousCat.id}>
                    <Link
                      to={`${categorie.path}/${sousCat.name}`}
                      className="sous-categorie-link"
                    >
                      <h3>{sousCat.name}</h3>
                      <img
                        className="img-container"
                        src={sousCat.img}
                        alt={sousCat.name}
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Sejour;
