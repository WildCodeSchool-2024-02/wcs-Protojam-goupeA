import { useLoaderData } from "react-router-dom";

function Perso() {
  const celebrities = useLoaderData();
  return <p>{celebrities[0].name}</p>;
}

export default Perso;
