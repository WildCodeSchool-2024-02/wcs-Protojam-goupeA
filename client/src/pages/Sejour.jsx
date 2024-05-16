import { Link } from "react-router-dom";
import { useState } from "react";
import categories from "../data/categoriesData";

function Sejour() {
  const [filterChoice, setFilterChoice] = useState("");

  const choisirAleatoire = (tab) => {
    const index = Math.floor(Math.random() * tab.length);

    return tab[index];
  };

  const [itemAleatoire, setItemAleatoire] = useState([]);

  const r = choisirAleatoire(categories);
  const s = choisirAleatoire(r.sousCategorie);

  const handleFilter = () => {
    setItemAleatoire(s);
  };

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
                  <div className="echappe-container" key={index.id}>
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
      <button className="button" type="button" onClick={() => handleFilter()}>
        <p>{itemAleatoire.name}</p>
      </button>
    </section>
  );
}

export default Sejour;
