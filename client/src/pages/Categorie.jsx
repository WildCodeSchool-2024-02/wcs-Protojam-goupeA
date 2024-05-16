import { Link, useLocation } from "react-router-dom";
import categories from "../data/categoriesData";

function Categorie() {
  const location = useLocation();
  const categoryName = location.pathname.split("/")[2];
  const selectedCategory = categories.find(
    (categorie) => categorie.path === `/categorie/${categoryName}`
  );
  if (!selectedCategory) {
    return <div>Catégorie non trouvée</div>;
  }

  return (
    <div>
      <h2>{selectedCategory.name}</h2>
      <Link to={selectedCategory.path}>
        <img
          className="categorie-img"
          src={selectedCategory.img}
          alt={selectedCategory.name}
        />
        <h3>{selectedCategory.name}</h3>
      </Link>
      {selectedCategory.sousCategorie &&
        selectedCategory.sousCategorie.map((perso) => (
          <Link
            to={perso.path}
            className="sous-categorie-container"
            key={perso.name}
          >
            <img
              className="sous-categorie-img"
              src={perso.img}
              alt={perso.name}
            />
            <h3>{perso.name}</h3>
          </Link>
        ))}
    </div>
  );
}

export default Categorie;
