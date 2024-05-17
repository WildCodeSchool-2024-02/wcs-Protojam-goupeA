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

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Accueil />,
      },
      {
        path: "/sejour",
        element: <Sejour />,
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
            return fetch(`http://localhost:3000/reservation/${name}`);
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
