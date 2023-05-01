import { Navigate, Route, Routes } from "react-router-dom";

import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Projects from './routes/Projects';
import Contact from './routes/Contact';


function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    </>
  );
}

export default App;
