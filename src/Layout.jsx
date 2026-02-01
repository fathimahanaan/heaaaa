import React from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";

export default function Layout({ children }) {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="pt-[180px]">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
