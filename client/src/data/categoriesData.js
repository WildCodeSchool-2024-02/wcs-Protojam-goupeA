import foret from "../assets/categorie/vue-fascinante-foret-par-journee-ensoleillee-montanges-france.jpg";
import sf from "../assets/categorie/futuristic-moon-background.jpg";
import montagne from "../assets/categorie/aiguille-verte-from-mont-blanc-massif-reflecting-water-chamonix-france.jpg";
import cosmique from "../assets/categorie/lamp-design-with-fantasy-style.jpg";
import aventure from "../assets/categorie/hiker-going-up-aiguille-du-midi.jpg";
import yvan from "../assets/personnage/Yvan_Kereun_Appa.jpg";
import baloo from "../assets/personnage/Baloo.png";

const categories = [
  {
    name: "Forêt",
    img: foret,
    path: "/categorie/foret",
    sousCategorie: [
      {
        name: "Yvan Kereun Appa",
        img: yvan,
      },
      {
        name: "Balou",
        img: baloo,
      },
    ],
  },
  {
    name: "Science-Fiction",
    img: sf,
    path: "/categorie/science-fiction",
    sousCategorie: [
      {
        name: "Yvan Kereun Appa",
        img: yvan,
      },
      {
        name: "Balou",
        img: baloo,
      },
    ],
  },
  {
    name: "Montagne",
    img: montagne,
    path: "/categorie/montagne",
    sousCategorie: [
      {
        name: "Yvan Kereun Appa",
        img: yvan,
      },
      {
        name: "Balou",
        img: baloo,
      },
    ],
  },
  {
    name: "Cosmique",
    img: cosmique,
    path: "/categorie/cosmique",
    sousCategorie: [
      {
        name: "Yvan Kereun Appa",
        img: yvan,
      },
      {
        name: "Balou",
        img: baloo,
      },
    ],
  },
  {
    name: "Aventure",
    img: aventure,
    path: "/categorie/aventure",
    sousCategorie: [
      {
        name: "Yvan Kereun Appa",
        img: yvan,
      },
      {
        name: "Balou",
        img: baloo,
      },
    ],
  },
];

export default categories;
