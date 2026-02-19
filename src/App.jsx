import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import WhatsApp from "./components/Whatsapp";
import Home from "./components/home/Home";
import FounderVision from "./components/FounderVision";
import Collections from "./components/Collections";
import Lookbook from "./components/Lookbook";
import VisitUs from "./components/VisitUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/navbar/TermsAndConditions";
import Faq from "./components/Faq";
import CollectionGridPage from "./components/CollectionGridPage";

// Define all routes in an array
const routes = [
  {
    path: "/",
    element: (
      <>
        <WhatsApp />
        <Home />
        <FounderVision />
        <Collections />
        <Lookbook />
        <VisitUs />
      </>
    ),
    layout: true, // wrap with Layout
  },
  { path: "/lookbook", element: <Lookbook />, layout: true },
 { 
  path: "/collections", 
  element: <Collections  />, 
  layout: true 
},
  { path: "/instore", element: <CollectionGridPage/>, layout: true },
  { path: "/visit", element: <VisitUs />, layout: true },
  { path: "/about", element: <FounderVision />, layout: true },
  { path: "/privacy-policy", element: <PrivacyPolicy />, layout: false },  
  { path: "/Terms-and-conditions" ,element: <TermsAndConditions/>, layout: false }, 
  {path:"/Faq",element: <Faq/>, layout: false }

   
];

export default function App() {
  return (
    <Routes>
      {routes.map(({ path, element, layout }) => (
        <Route
          key={path}
          path={path}
          element={layout ? <Layout>{element}</Layout> : element}
        />
      ))}
    </Routes>
  );
}
