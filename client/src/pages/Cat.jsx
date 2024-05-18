import { useLoaderData, useLocation } from "react-router-dom";
import { useApi } from "../context/ApiContext";

function Cat() {
  const celebrities = useLoaderData(); // tab celebrities

  const { datas } = useApi(); // tab journeys

  const location = useLocation();
  const r = location.pathname.split("/")[1]; // foret, science-fiction, cosmique

  const removeAccents = (str) =>
    str.normalize("NFD").replace(/[\u0300-\u036f]/g, ""); // foret

  const idJourney = datas.filter(
    (data) => removeAccents(data.name.toLowerCase()) === r && data.id
  ); // Compare les 2 et si oui --> ['','',3,'','','']

  console.info(idJourney[0].id);

  const f = celebrities.map((celebrity) =>
    celebrity.journey_id === idJourney[0].id ? (
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
