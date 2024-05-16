import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import categories from "../data/categoriesData";

function Categorie() {
  const location = useLocation();
  const categoryName = location.pathname.split("/")[2];
  const selectedCategory = categories.find(
    (categorie) => categorie.path === `/categorie/${categoryName}`
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  if (!selectedCategory) {
    return <div>Catégorie non trouvée</div>;
  }

  const { sousCategorie } = selectedCategory;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sousCategorie.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sousCategorie.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container-title">
      <img
        className="categorie-img"
        src={selectedCategory.img}
        alt={selectedCategory.name}
      />
      <h2 className="title-cat">{selectedCategory.name}</h2>
      <div className="carousel">
        <div className="carousel-images">
          <div className="slide active">
            <Link
              to={`${selectedCategory.path}/${sousCategorie[currentIndex].name}`}
              className="sous-categorie-container"
            >
              <img
                className="sous-categorie-img"
                src={sousCategorie[currentIndex].img}
                alt={sousCategorie[currentIndex].name}
              />
              <h3>{sousCategorie[currentIndex].name}</h3>
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
