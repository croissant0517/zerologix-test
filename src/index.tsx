import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import App from "./App";
import ErrorPage from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="login">About Us</Link>
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <div>Login</div>,
  },
]);

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<RouterProvider router={router} />);
