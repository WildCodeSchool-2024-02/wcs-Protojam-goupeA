import { useState, useEffect } from "react";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import { useApi } from "../context/ApiContext";

function search(tab) {
  let i = 0;
  while (tab[i] === "") {
    i = +1;
  }
  return tab[i];
}

function Categorie() {
  const celebrities = useLoaderData();
  const { datas } = useApi();

  const location = useLocation(); // recupere le path
  const categoryName = location.pathname.split("/")[1];

  const test = [];

  const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const idSend = search(
    datas.map((data) =>
      removeAccents(data.name.toLowerCase()) === categoryName ? data.id : ""
    )
  );
  console.info(idSend);

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

  const idImgCat = idSend - 1;

  return (
    <div className="container-title">
      <img
        className="categorie-img"
        src={datas[idImgCat].url}
        alt={datas[idImgCat].name}
      />
      <h2 className="title-cat">{datas[idImgCat].name}</h2>
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
