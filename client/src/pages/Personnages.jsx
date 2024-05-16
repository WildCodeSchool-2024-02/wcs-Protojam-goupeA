import { Link } from "react-router-dom";
import imgYvan from "../assets/personnage/Yvan_Kereun_Appa.jpg";

const perso = [
  {
    name: "Yvan",
    img: imgYvan,
    activity: ["Mygales", "Faune & Flore", "Randonne"],
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
