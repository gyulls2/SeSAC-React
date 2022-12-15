import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addfruit from "./Addfruit";
import FruitsInfo from "./FruitsInfo";
import FruitsList from "./FruitsList";
import Home from "./Home";
import NotFound from "./NotFound";
import Root from "./Root";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/addFruit", element: <Addfruit /> },
        { path: "/fruitsList", element: <FruitsList /> },
        { path: "/fruitsList/:fruitId", element: <FruitsInfo /> },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
