import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Search } from "./pages/Search/Search.jsx";
import { GlobalStyle } from "./GlobalStyle.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>
);
