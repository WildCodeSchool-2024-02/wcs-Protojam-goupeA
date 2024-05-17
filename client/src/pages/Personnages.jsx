import { Link, useParams } from "react-router-dom";
import categories from "../data/categoriesData";

function Personnages() {
  const { categoryName, persoName } = useParams();

  // Normalize strings for comparison (remove accents, convert to lowercase)
  const normalizeString = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const normalizedCategoryName = normalizeString(categoryName);
  const category = categories.find(
    (cat) => normalizeString(cat.name) === normalizedCategoryName
  );

  const normalizedPersoName = normalizeString(persoName);
  const personnage = category?.sousCategorie.find(
    (perso) => normalizeString(perso.name) === normalizedPersoName
  );

  if (!personnage) {
    return <div>Personnage not found</div>;
  }

  return (
    <div>
      <section key={personnage.name} className="perso">
        <h2 className="titlePerso">{personnage.name}</h2>
        <div className="divPerso">
          <img src={personnage.img} alt={personnage.name} />
          <ul>
            <li>Nom du VIP: {personnage.name}</li>
            <li>Activité proposée: {personnage.activite}</li>
            <li>Description de l'activité: {personnage.description}</li>
          </ul>
        </div>
        <div className="divButton">
          <Link to={`/reservation/${personnage.name}`}>
            <button type="button" className="button">
              Réserver
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Personnages;
