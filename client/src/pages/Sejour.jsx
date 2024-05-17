import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

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
    console.info(itemAleatoire.name);
  };

  useEffect(() => {
    handleFilter();
  }, []);

  return (
    <section>
      <h2>Nos Échappées</h2>
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
            <Link to={categorie.path} key={categorie.id}>
              <div className="sousCategorie-container">
                {categorie.sousCategorie.map((sousCat) => (
                  <div className="echappe-container" key={sousCat.id}>
                    <Link
                      to={`${categorie.path}/${sousCat.name}`}
                      className="sous-categorie-link"
                    >
                      <img
                        className="img-container"
                        src={sousCat.img}
                        alt={sousCat.name}
                      />
                      <h3>{sousCat.name}</h3>
                    </Link>
                  </div>
                ))}
              </div>
            </Link>
          ))}
      </div>
      <Link to={`/categorie/${r.name}/${s.name}`}>
        <button className="button" type="button" onClick={() => handleFilter()}>
          <p>Random choice</p>
        </button>
      </Link>
    </section>
  );
}

export default Sejour;
