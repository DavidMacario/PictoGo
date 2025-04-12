import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Juego from "./pages/Juego";
import Traductor from "./pages/Traductor";
import Tips from "./pages/Tips";
import Recursos from "./pages/Recursos";
import Horario from "./pages/Horario";


export default function App() {
  return (
    <Router>
      <nav className="bg-pastelBlue p-4 flex justify-around font-comic text-lg">
        <Link to="/">Inicio</Link>
        <Link to="/juego">Juego</Link>
        <Link to="/traductor">Traductor</Link>
        <Link to="/tips">Tips</Link>
        <Link to="/recursos">Recursos</Link>
        <Link to="/horario">Horario</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/juego" element={<Juego />} />
        <Route path="/traductor" element={<Traductor />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/horario" element={<Horario />} />
      </Routes>
    </Router>
  );
}
