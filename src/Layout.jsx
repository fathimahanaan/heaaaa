import Navbar from "./components/navbar/Navbar";

 

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-[188px] md:pt-[188px]">
        {children}
      </main>
    </>
  );
}
