
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Proyectos from './pages/Proyectos';
import Habilidades from './pages/Habilidades';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="" element={<Inicio />} />
          <Route path="habilidades" element={<Habilidades />} />
          <Route path="proyectos" element={<Proyectos />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
