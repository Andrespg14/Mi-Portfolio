
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import SobreMi from './pages/SobreMi';
import Habilidades from './pages/Habilidades';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/habilidades" element={<Habilidades />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
