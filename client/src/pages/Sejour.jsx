import { useState } from "react";
import categories from "../data/categoriesData";

function Sejour() {
  const [filterChoice, setFilterChoice] = useState("");
  console.log(filterChoice);
  return (
    <section>
      <h1>Nos Échappée</h1>
      <select onChange={(e) => setFilterChoice(e.target.value)}>
        <option value="">All</option>
        {categories.map((categ) => (
          <option key={categ.id}>{categ.name}</option>
        ))}
      </select>
      <div className="category-container">
        {categories
          .filter(
            (categorie) => categorie.name === filterChoice || !filterChoice
          )
          .map((categorie) => (
            <div key={categorie.id}>
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
            </div>
          ))}
      </div>
    </section>
  );
}

export default Sejour;
