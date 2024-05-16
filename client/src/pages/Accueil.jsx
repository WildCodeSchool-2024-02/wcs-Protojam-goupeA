import { Link } from "react-router-dom";
import foret from "../assets/categorie/vue-fascinante-foret-par-journee-ensoleillee-montanges-france.jpg";
import sf from "../assets/categorie/futuristic-moon-background.jpg";
import montagne from "../assets/categorie/aiguille-verte-from-mont-blanc-massif-reflecting-water-chamonix-france.jpg";
import cosmique from "../assets/categorie/lamp-design-with-fantasy-style.jpg";
import aventure from "../assets/categorie/hiker-going-up-aiguille-du-midi.jpg";

const categories = [
  {
    name: "Forêt",
    img: foret,
    path: "/categorie/foret",
  },
  {
    name: "Science-Fiction",
    img: sf,
    path: "/categorie/science-fiction",
  },
  {
    name: "Montagne",
    img: montagne,
    path: "/categorie/montagne",
  },
  {
    name: "Cosmique",
    img: cosmique,
    path: "/categorie/cosmique",
  },
  {
    name: "Aventure",
    img: aventure,
    path: "/categorie/aventure",
  },
];

function Acceuil() {
  return (
    <div>
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
