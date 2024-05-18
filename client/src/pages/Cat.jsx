import { useLoaderData, useLocation } from "react-router-dom";
import { useApi } from "../context/ApiContext";

function search(tab) {
  let i = 0;
  while (tab[i] === "") {
    i = +1;
  }
  return tab[i];
}

function Cat() {
  const celebrities = useLoaderData(); // tab celebrities

  const { datas } = useApi(); // tab journeys

  const location = useLocation();
  const r = location.pathname.split("/")[1];

  const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const idJourney = datas.map((data) =>
    removeAccents(data.name.toLowerCase()) === r ? data.id : ""
  );

  console.info(idJourney);

  const f = celebrities.map((celebrity) =>
    celebrity.journey_id === search(idJourney) ? (
      <p key={celebrity.id}>{celebrity.name}</p>
    ) : (
      ""
    )
  );

  return (
    <>
      <p>coucou</p>
      <div>{f}</div>
    </>
  );
}

export default Cat;
