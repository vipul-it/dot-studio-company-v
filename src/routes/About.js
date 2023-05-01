import React, { useEffect } from "react";
import Navbar from "../components/Navbar";


const About = () => {
  useEffect(() => {
    document.title = "About - Interior Designer";
  }, []);
  return (
    <div>
      <Navbar />
    
     
    </div>
  );
};

export default About;
