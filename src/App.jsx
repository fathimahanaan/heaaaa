import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Collections from "./components/Collections";
import Lookbook from "./components/Lookbook";
import VisitUs from "./components/VisitUs";
import FounderVision from "./components/FounderVision";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Main single-page route */}
        <Route
          path="/"
          element={
            <main className="pt-36">
              <Home />
              <FounderVision />
              <Collections />
              <Lookbook />

              <VisitUs />
            </main>
          }
        />

        {/* Separate pages */}
        <Route
          path="/lookbook"
          element={
            <main className="pt-36">
              <Lookbook />
            </main>
          }
        />

        <Route
          path="/collections"
          element={
            <main className="pt-36">
              <Collections />
              <Lookbook />
            </main>
          }
        />

        <Route
          path="/visit"
          element={
            <main className="pt-36">
              <VisitUs />
            </main>
          }
        />

        <Route
          path="/about"
          element={
            <main className="pt-36">
              <FounderVision />
            </main>
          }
        />
      </Routes>
    </>
  );
}
