import Home from "./pages/Home";
import About from "./pages/About"
import Services from "./pages/Services"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Services/>} />
      <Route path="/gallery" element={<Gallery/>} />
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </div>
  );
}

export default App;
