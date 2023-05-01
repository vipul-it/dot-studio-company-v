import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import Carouselc from '../components/CarouselComponent';
// Initialization for ES Users




const Projects = () => {
 


  useEffect(() => {
    document.title = "Projects - Interior Designer";
  }, []);
  return (
    <div>
        <Navbar />
        <Carouselc />
        
        
    </div>
  )
}

export default Projects