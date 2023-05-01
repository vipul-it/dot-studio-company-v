import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';


const Contact = () => {
  useEffect(() => {
    document.title = "Contact - Interior Designer";
  }, []);
  return (
    <div>
        <Navbar />
        
    </div>
  )
}

export default Contact