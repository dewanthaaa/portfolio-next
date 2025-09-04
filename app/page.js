"use client";
import Navbar from "./components/navbar.jsx";
import Header from "./components/header.jsx";
import About from "./components/about.jsx";
import Services from "./components/services.jsx";
import Work from "./components/work.jsx";
import Contact from "./components/contact.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
    </>
  );
}
