import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import ErrorPage from "./page/Error";

import Layout from "./components/Layout/Layout";

import { GlobalStyle } from "../style/globalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <h1>Hello World</h1>
            <Link to="login">Login</Link>
          </div>
        ),
      },
      {
        path: "login",
        element: <div>Login</div>,
      },
    ],
  },
]);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <>
    <GlobalStyle />
    <RouterProvider router={router} />
  </>
);
