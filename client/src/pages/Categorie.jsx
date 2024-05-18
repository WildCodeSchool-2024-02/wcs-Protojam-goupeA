import { useState, useEffect } from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";

function Categorie() {
  const personnage = useLoaderData();

  const location = useLocation(); // recupere le path

  const [datas, setDatas] = useState([
    {
      id: 1,
      name: "Forêt",
      url: "https://echappee-celebrement-fantasque.netlify.app/assets/vue-fascinante-foret-par-journee-ensoleillee-montanges-france-DChjSNJQ.jpg",
    },
  ]);

  useEffect(() => {
    fetch(`https://wcs-protojam-goupea.onrender.com/journey`)
      .then((response) => response.json())
      .then((data) => setDatas(data.journeys))
      .catch((error) => console.error(error));
  }, []);

  const categoryName = location.pathname.split("/")[2];

  const selectedCategory = personnage.celebrities.find(
    (categorie) => categorie.path === `./${categoryName}`
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === personnage.celebrities.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? personnage.celebrities.length - 1 : prevIndex - 1
    );
  };
  console.info("test", datas);
  const stan = [];

  console.info(stan);
  return (
    <div className="container-title">
      {console.info("plop", datas)}
      <img className="categorie-img" src={datas[0].url} alt={datas[0].name} />
      <h2 className="title-cat">{datas[0].name}</h2>
      <div className="carousel">
        <div className="carousel-images">
          {" "}
          {personnage.celebrities.journey_id === datas.id
            ? stan.push(personnage.celebrities)
            : ""}
          <div className="slide active">
            <Link
              to={`./${personnage.celebrities[currentIndex].name}`}
              className="sous-categorie-container"
            >
              <img
                className="sous-categorie-img"
                src={stan[currentIndex].url}
                alt={personnage.celebrities[currentIndex].name}
              />
              <h3>{personnage.celebrities[currentIndex].name}</h3>
            </Link>
          </div>
        </div>
        <button type="button" className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button type="button" className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Categorie;
