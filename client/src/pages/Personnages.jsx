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
          <li>{perso[0].name}</li>
          <li>{perso[0].activity}</li>
          <li>{perso[0].condition}</li>
          <li>{perso[0].price}.00€</li>
        </ul>
      </div>
      <div className="divButton">
        <button type="button" className="button">
          Rreserver
        </button>
      </div>
    </section>
  );
}

export default Personnages;
