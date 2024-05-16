import { Link } from "react-router-dom";
import { useState } from "react";
import categories from "../data/categoriesData";

function Sejour() {
  const [filterChoice, setFilterChoice] = useState("");

  return (
    <section>
      <h1 className="titre-echappe">Nos Échappée</h1>
      <div className="bloc">
        <div className="select">
          <select onChange={(e) => setFilterChoice(e.target.value)}>
            <option value="">All</option>
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
            <Link to={categorie.path} key={categorie.id}>
              <div className="sousCategorie-container">
                {categorie.sousCategorie.map((sousCat, index) => (
                  <div className="echappe-container" key={index}>
                    <h3>{sousCat.name}</h3>
                    <img
                      className="img-container"
                      src={sousCat.img}
                      alt={sousCat.name}
                    />
                  </div>
                ))}
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}

export default Sejour;
