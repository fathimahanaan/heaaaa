import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Main content scrolls naturally */}
      <main className="pt-[120px] sm:pt-[180px] w-full"> {children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
