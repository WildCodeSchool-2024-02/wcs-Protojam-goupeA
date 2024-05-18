/* eslint-disable react/prop-types */
import { useState, createContext, useContext, useEffect, useMemo } from "react";

const ApiContext = createContext();

export function ApiProvider({ children }) {
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
  const value = useMemo(() => ({ datas, setDatas }), [datas]);

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

export const useApi = () => useContext(ApiContext);
