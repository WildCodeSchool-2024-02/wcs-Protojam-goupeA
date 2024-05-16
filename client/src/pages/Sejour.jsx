import { useState } from "react";
import categories from "../data/categoriesData";

function Sejour() {
  const [filterChoice, setFilterChoice] = useState("");
  console.info("PATATE ", categories[0].sousCategorie.length);

  // Créons une fonction pour choisir un élément aléatoire
  const choisirAleatoire = (tab) => {
    const index = Math.floor(Math.random() * tab.length);
    // console.info("tab entier: ", tab);
    console.info("tab index", tab[index]);
    return tab[index];
  };

  // Utilisons le Hook d'état pour stocker l'élément aléatoire
  const [itemAleatoire, setItemAleatoire] = useState([]);

  const r = choisirAleatoire(categories);
  console.info("r.sousC ", r.sousCategorie);
  const s = choisirAleatoire(r.sousCategorie);

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
            <div key={categorie.id}>
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
            </div>
          ))}
      </div>
      <button
        className="button"
        type="button"
        onClick={() => setItemAleatoire(s)}
      >
        {itemAleatoire && <p>{itemAleatoire.name}</p>}
      </button>
    </section>
  );
}

export default Sejour;
