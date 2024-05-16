import foret from "../assets/categorie/vue-fascinante-foret-par-journee-ensoleillee-montanges-france.jpg";
import aquatique from "../assets/categorie/underwater.jpg";
import sf from "../assets/categorie/futuristic-moon-background.jpg";
import montagne from "../assets/categorie/aiguille-verte-from-mont-blanc-massif-reflecting-water-chamonix-france.jpg";
import cosmique from "../assets/categorie/lamp-design-with-fantasy-style.jpg";
import aventure from "../assets/categorie/hiker-going-up-aiguille-du-midi.jpg";
import yvan from "../assets/personnage/Yvan_Kereun_Appa.jpg";
import baloo from "../assets/personnage/Baloo.png";
import vador from "../assets/personnage/darkvador.jpg";
import ellen from "../assets/personnage/ellenripley.webp";
import gollum from "../assets/personnage/gollum.jpg";
import hojac from "../assets/personnage/hojac.jpg";
import pape from "../assets/personnage/pape2.jpg";
import durif from "../assets/personnage/sylvaindurif.jpg";
import horn from "../assets/personnage/mikehorn.jpg";
import denis from "../assets/personnage/denisbrogniart.jpg";
import cousteau from "../assets/personnage/cousteau.jpg";
import aquaman from "../assets/personnage/aquaman.jpg";

const categories = [
  {
    name: "Forêt",
    id: "1",
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
    id: "2",
    img: sf,
    path: "/categorie/science-fiction",
    sousCategorie: [
      {
        name: "Dark Vador",
        img: vador,
      },
      {
        name: "Ellen Ripley",
        img: ellen,
      },
    ],
  },
  {
    name: "Montagne",
    id: "3",
    img: montagne,
    path: "/categorie/montagne",
    sousCategorie: [
      {
        name: "Gollum",
        img: gollum,
      },
      {
        name: "Nicolas Hojac",
        img: hojac,
      },
    ],
  },
  {
    name: "Cosmique",
    id: "4",
    img: cosmique,
    path: "/categorie/cosmique",
    sousCategorie: [
      {
        name: "Pape",
        img: pape,
      },
      {
        name: "Sylvain Durif",
        img: durif,
      },
    ],
  },
  {
    name: "Aventure",
    id: "5",
    img: aventure,
    path: "/categorie/aventure",
    sousCategorie: [
      {
        name: "Mike Horn",
        img: horn,
      },
      {
        name: "Denis Brogniart",
        img: denis,
      },
    ],
  },
  {
    name: "Aquatique",
    id: "6",
    img: aquatique,
    path: "/categorie/aquatique",
    sousCategorie: [
      {
        name: "Jacques-Yves Cousteau",
        img: cousteau,
      },
      {
        name: "Arthur aka Aquaman Curry",
        img: aquaman,
      },
    ],
  },
];

export default categories;
