import App from "./App.tsx";
import WhoAmI from "./pages/WhoAmI.tsx";
import GuessTheResult from "./pages/GuessTheResult.tsx";
import WhoIsMissing from "./pages/WhoIsMissing.tsx";
import WhoHasMoreGoals from "./pages/WhoHasMoreGoals.tsx";
import Error404 from "./pages/Error404.tsx";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
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

export default router;
