import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Recommendations from "./components/Recomendations";

const rootElement = document.getElementById("root");

if (rootElement) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "recomendacoes",
      element: <Recommendations />,
    },
  ]);

  createRoot(rootElement).render(<RouterProvider router={router} />);
} else {
  console.error('Root element with id "root" not found in the document.');
}
