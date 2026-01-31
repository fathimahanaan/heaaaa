import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./components/home/Home";
import Collections from "./components/Collections";
import Lookbook from "./components/Lookbook";
import VisitUs from "./components/VisitUs";
import FounderVision from "./components/FounderVision";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
            <FounderVision />
            <Collections />
            <Lookbook />
            <VisitUs />
          </Layout>
        }
      />

      <Route
        path="/lookbook"
        element={
          <Layout>
            <Lookbook />
          </Layout>
        }
      />

      <Route
        path="/collections"
        element={
          <Layout>
            <Collections />
            <Lookbook />
          </Layout>
        }
      />

      <Route
        path="/visit"
        element={
          <Layout>
            <VisitUs />
          </Layout>
        }
      />

      <Route
        path="/about"
        element={
          <Layout>
            <FounderVision />
          </Layout>
        }
      />
    </Routes>
  );
}
