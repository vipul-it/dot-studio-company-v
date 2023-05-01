import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";




const Home = () => {
  useEffect(() => {
    document.title = "Home - Interior Designer";
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Footer />
      
    </div>
  );
};

export default Home;
