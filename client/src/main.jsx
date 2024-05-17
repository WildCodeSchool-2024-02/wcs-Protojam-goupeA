import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Accueil from "./pages/Accueil";
import Sejour from "./pages/Sejour";
import Reservation from "./pages/Reservation";
import Contact from "./pages/Contact";
import Categorie from "./pages/Categorie";
import Personnages from "./pages/Personnages";

const perso = async () => {
  const response = await fetch(
    "https://wcs-protojam-goupea.onrender.com/celebrity"
  );
  const data = await response.json();
  return data;
};

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
        loader: perso,
      },
      {
        path: "/sejour",
        element: <Sejour />,
        loader: perso,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/categorie/:categoryName",
        element: <Categorie />,
      },
      {
        path: "/categorie/:categoryName/:persoName",
        element: <Personnages />,
      },
      {
        path: "/reservation/:name",
        element: <Reservation />,
        loader: async ({ params }) => {
          const { name } = params;
          try {
            return fetch(`./reservation/${name}`);
          } catch (error) {
            return error;
          }
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
