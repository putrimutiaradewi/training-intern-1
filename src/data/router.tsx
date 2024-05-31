import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/login";
import DefaultLayout from "../layout/default";
import HomePages from "../pages/home";

const routerConfig = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePages />,
      },
    ],
  },
]);

export default routerConfig;
