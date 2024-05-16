import { Link } from "react-router-dom";
import imgYvan from "../assets/personnage/Yvan_Kereun_Appa.jpg";

const perso = [
  {
    name: "Yvan",
    img: imgYvan,
    activity: "L'Appel de la Forêt de Kereun",
    description:
      "Rejoignez Yvan Kereun Appa dans une forêt où les arbres murmurent des secrets anciens et les animaux organisent des soirées dansantes. Marchez à travers des clairières enchantées et découvrez pourquoi les écureuils le considèrent comme leur gourou. Une aventure déjantée pour se déconnecter et rire aux éclats.",
    condition: "No fear",
    price: 150,
  },
];

function Personnages() {
  return (
    <section className="perso">
      <h2 className="titlePerso">{perso[0].name}</h2>
      <div className="divPerso">
        <img src={perso[0].img} alt={perso[0].name} />
        <ul>
          <li>Nom du VIP: {perso[0].name}</li>


          <li>Activites proposee: {perso[0].activity}</li>
          <li>Activites proposee: {perso[0].description}</li>

          <li>
            Activités proposées:
            {perso[0].activity.map((activity, index) => (
              <span key={activity}>
                {index > 0 ? ", " : ""}
                {activity}
              </span>
            ))}
          </li>


          <li>Condition(s): {perso[0].condition}</li>
          <li>Prix de l'aventure: {perso[0].price}.00€</li>
        </ul>
      </div>
      <div className="divButton">
        <Link to={`/reservation/${perso[0].name}`}>
          <button type="button" className="button">
            Réserver
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Personnages;
