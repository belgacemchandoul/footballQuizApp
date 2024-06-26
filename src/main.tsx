import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import WhoAmI from "./pages/WhoAmI.tsx";
import GuessTheResult from "./pages/GuessTheResult.tsx";
import WhoIsMissing from "./pages/WhoIsMissing.tsx";
import WhoHasMoreGoals from "./pages/WhoHasMoreGoals.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>404 not found</div>,
  },
  {
    path: "/who-am-i",
    element: <WhoAmI />,
  },
  {
    path: "/guess-the-result",
    element: <GuessTheResult />,
  },
  {
    path: "/who-Is-missing",
    element: <WhoIsMissing />,
  },
  {
    path: "/who-has-more-goals",
    element: <WhoHasMoreGoals />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
