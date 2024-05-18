import { useState, useEffect } from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { useApi } from "../context/ApiContext";

function Categorie() {
  const celebrities = useLoaderData();
  const { datas } = useApi();

  const location = useLocation(); // recupere le path

  const test = [];
  /* const idSend = location.state.idSend; */
  const idSend = 1;
  const categoryName = location.pathname.split("/")[1];
  console.info("datas", categoryName);

  const selectedCategory = celebrities.find(
    (categorie) => categorie.journey_id === datas[0].id
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === test.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? test.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container-title">
      <img
        className="categorie-img"
        src={datas[idSend].url}
        alt={datas[idSend].name}
      />
      <h2 className="title-cat">{datas[idSend].name}</h2>
      <div className="carousel">
        <div className="carousel-images">
          {" "}
          {celebrities.map((tab) =>
            tab.journey_id === idSend ? test.push(tab) : ""
          )}
          <div className="slide active">
            <Link
              to={`./${celebrities[currentIndex].name}`}
              className="sous-categorie-container"
            >
              {console.info(test)}
              <img
                className="sous-categorie-img"
                src={test[currentIndex].url}
                alt={test[currentIndex].name}
              />
              <h3>{celebrities[currentIndex].name}</h3>
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
