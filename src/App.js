import { async } from "@firebase/util";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import { useEffect } from "react";
import "./App.css";
// import Router from "./components/fruit/Router";
import { db } from "./firebase";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Addfruit from "./components/fruit/Addfruit";
import FruitsInfo from "./components/fruit/FruitsInfo";
import FruitsList from "./components/fruit/FruitsList";
import Home from "./components/fruit/Home";
import NotFound from "./components/fruit/NotFound";
import Root from "./components/fruit/Root";

function App() {
  const fruitRef = collection(db, "fruits");

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/addFruit", element: <Addfruit fruitRef={fruitRef} /> },
        { path: "/fruitsList", element: <FruitsList fruitRef={fruitRef} /> },
        {
          path: "/fruitsList/:fruitId",
          element: <FruitsInfo fruitRef={fruitRef} />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Router /> */}
    </>
  );
}

export default App;
