import React, { useEffect } from 'react'
import Navbar from "../components/Navbar";


const Services = () => {
  useEffect (() => {
    document.title = "Services - Interior Designer";
  }, []);
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default Services