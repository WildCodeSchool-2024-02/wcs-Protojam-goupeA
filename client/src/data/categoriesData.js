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
        activite: "L'Appel de la Forêt de Kereun",
        description:
          "Rejoignez Yvan Kereun Appa dans une forêt où les arbres murmurent des secrets anciens et les animaux organisent des soirées dansantes. Marchez à travers des clairières enchantées et découvrez pourquoi les écureuils le considèrent comme leur gourou. Une aventure déjantée pour se déconnecter et rire aux éclats.",
      },
      {
        name: "Balou",
        img: baloo,
        activite: "La Ronde de Balou dans la Jungle",
        description:
          "Dansez avec Balou au rythme de Il en faut peu pour être heureux tout en explorant la jungle luxuriante. Découvrez les secrets de la sieste parfaite sous les arbres fruitiers et apprenez les meilleures techniques pour chasser les moustiques avec style. Une escapade pleine de rires et de relaxation.",
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
        activite: "La Forêt Sombre de Vador",
        description:
          "Rejoignez Dark Vador pour une retraite relaxante dans une forêt sombre située sur la planète Endor. Marchez à travers des arbres géants et écoutez le chant apaisant des Ewoks, tout en méditant sur votre place dans l'univers. C'est une déconnexion totale où vous pourrez enfin respirer sans votre masque. Qui aurait cru que Vador avait la main verte ?",
      },
      {
        name: "Ellen Ripley",
        img: ellen,
        activite: "Ripley et la Jungle Spatiale",
        description:
          "Enfilez votre combinaison spatiale et suivez Ellen Ripley dans une jungle luxuriante située sur une lune lointaine. Découvrez des plantes géantes et des créatures étranges (mais inoffensives, promis !). Profitez de séances de yoga anti-gravité et de bains de boue extraterrestres. Une aventure où même les Xénomorphes prennent des vacances pour se ressourcer.",
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
        activite: "L'Ascension Précieuse de Gollum",
        description:
          "Grimpez avec Gollum à travers les montagnes et écoutez-le murmurer des douceurs à son précieux tout en admirant les vues spectaculaires. Découvrez les grottes secrètes et les lacs cachés. Une aventure où vous apprendrez l'art de la pêche avec des mains maigres et des yeux globuleux",
      },
      {
        name: "Nicolas Hojac",
        img: hojac,
        activite: "Les Pics Vertigineux de Hojac",
        description:
          "Suivez Nicolas Hojac dans une ascension à couper le souffle des plus hauts sommets. Testez vos limites avec des défis d'escalade extrêmes, puis détendez-vous avec des pique-niques alpins où les marmottes vous tiendront compagnie. Parfait pour ceux qui cherchent à se déconnecter en flirtant avec l'altitude",
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
        activite: "Les Jardins Célestes du Vatican",
        description:
          "Embarquez avec le Pape pour une aventure spirituelle dans des jardins cosmiques. Méditez sous des étoiles scintillantes et flottez parmi les nébuleuses. Une retraite divine où même les anges prennent des selfies. Une expérience sacrée pour se déconnecter et trouver la paix dans les cieux",
      },
      {
        name: "Sylvain Durif",
        img: durif,
        activite: "Les Univers Mystiques de Durif",
        description:
          "Voyagez à travers des dimensions parallèles avec Sylvain Durif et découvrez des paysages cosmologiques fascinants. Assistez à des spectacles de lumière interdimensionnels et explorez des mondes où la réalité défie l'imagination. Parfait pour ceux qui veulent se perdre dans l'inconnu et se retrouver dans le mystique.",
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
        activité: "Les Quêtes Épiques de Horn",
        description:
          "Rejoignez Mike Horn dans une série de quêtes épiques à travers jungles, déserts et montagnes. Testez vos compétences de survie tout en suivant les traces d'explorateurs légendaires. Une aventure où chaque journée est un nouveau défi et chaque nuit une histoire à raconter.",
      },
      {
        name: "Denis Brogniart",
        img: denis,
        activite: "L'Expédition Brogniart",
        description:
          "artez à l'aventure avec Denis Brogniart dans des terres sauvages et inconnues. Relevez des défis extrêmes, comme allumer un feu avec des lunettes de soleil et construire des radeaux en bambou. Une déconnexion totale pour les amateurs de survie et de sensations fortes.",
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
        activite: "Les Abysses de Cousteau",
        description:
          "Plongez dans les profondeurs avec Jacques-Yves Cousteau et explorez des récifs coralliens et des épaves mystérieuses. Nagez avec des créatures marines fascinantes et découvrez les secrets de l'océan. Une aventure aquatique pour ceux qui veulent se déconnecter et se perdre dans le bleu infini.",
      },
      {
        name: "Arthur aka Aquaman Curry",
        img: aquaman,
        activite: "Les Vacances d'Aquaman",
        description:
          "Plongez dans les royaumes sous-marins avec Aquaman et découvrez des cités englouties. Nagez avec les dauphins et faites des courses de tortues. Profitez de bains thermaux naturels sous l'eau et de festins de fruits de mer frais. Une escapade aquatique pour ceux qui cherchent une déconnexion totale et une aventure inoubliable.",
      },
    ],
  },
];

export default categories;
