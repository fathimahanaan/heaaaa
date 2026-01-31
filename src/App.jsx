import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Collections from "./components/Collections";
import Lookbook from "./components/Lookbook";
import VisitUs from "./components/VisitUs";
import FounderVision from "./components/FounderVision";
import Layout from "./Layout";

const routes = [
  {
    path: "/",
    element: (
      <>
        <Home />
        <FounderVision />
        <Collections />
        <Lookbook />
        <VisitUs />
      </>
    ),
  },
  { path: "/lookbook", element: <Lookbook /> },
  { path: "/collections", element: (
      <>
        <Collections />
        <Lookbook />
      </>
    ),
  },
  { path: "/visit", element: <VisitUs /> },
  { path: "/about", element: <FounderVision /> },
];

export default function App() {
  return (
    <Routes>
      {routes.map(({ path, element }) => (
        <Route key={path} path={path} element={<Layout>{element}</Layout>} />
      ))}
    </Routes>
  );
}
