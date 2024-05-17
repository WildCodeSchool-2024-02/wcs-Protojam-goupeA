import { Link, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";

function Sejour() {
  const personnage = useLoaderData();

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch(`https://wcs-protojam-goupea.onrender.com/journey/`)
      .then((response) => response.json())
      .then((data) => setDatas(data))
      .catch((error) => console.error(error));
  }, []);

  console.info(datas.journeys);

  const [filterChoice, setFilterChoice] = useState("");

  const choisirAleatoire = (tab) => {
    const index = Math.floor(Math.random() * tab.length);

    return tab[index];
  };

  const [itemAleatoire, setItemAleatoire] = useState([]);

  const r = choisirAleatoire(personnage.celebrities);

  const handleFilter = () => {
    setItemAleatoire(r);
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
            {datas?.journeys?.map((categ) => (
              <option key={categ.id}>{categ.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="category-container">
        {console.info(personnage.celebrities)}
        {personnage.celebrities
          .filter(
            (categorie) =>
              categorie.journey_id === filterChoice || !filterChoice
          )
          .map((categorie) => (
            <Link to={categorie.journey_id} key={categorie.id}>
              <div className="sousCategorie-container">
                {personnage.celebrities.map((sousCat) => (
                  <div className="echappe-container" key={sousCat.id}>
                    <Link
                      to={`${categorie.path}/${sousCat.name}`}
                      className="sous-categorie-link"
                    >
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
            </Link>
          ))}
      </div>
      <Link to={`/categorie/${r.name}`}>
        <button className="button" type="button" onClick={() => handleFilter()}>
          <p>Random choice</p>
        </button>
      </Link>
    </section>
  );
}

export default Sejour;
