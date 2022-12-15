import { Avatar } from "@mui/material";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import Product from "./Product";
import ProductInfo from "./ProductInfo";
import Root from "./Root";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      // Outlet 설정
      children: [
        { index: true, element: <Home /> }, // index:true = path:"/" 둘 다 같은 뜻
        { path: "/product", element: <Product /> }, // path로 경로를 요청하면 element의 컴포넌트를 보여줌
        { path: "/product/:productId", element: <ProductInfo /> },
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