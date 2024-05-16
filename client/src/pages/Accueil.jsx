import { Link } from "react-router-dom";
import categories from "../data/categoriesData";

function Acceuil() {
  return (
    <div className="cards-container">
      {categories.map((categorie) => (
        <Link
          to={categorie.path}
          className="categorie-container"
          key={categorie.name}
        >
          <img
            className="categorie-img"
            src={categorie.img}
            alt={categorie.name}
          />
          <h2>{categorie.name}</h2>
        </Link>
      ))}
    </div>
  );
}

export default Acceuil;
