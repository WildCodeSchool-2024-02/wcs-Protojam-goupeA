import { useLoaderData } from "react-router-dom";
import { useApi } from "../context/ApiContext";

function Cat() {
  const personnage = useLoaderData();
  const coucou = personnage.celebrities[0].name;
  const { datas } = useApi();
  console.info(datas);

  return <p>{coucou}</p>;
}

export default Cat;
