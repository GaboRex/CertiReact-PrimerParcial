
import './App.css'
import EventoForm from './components/EventoForm';
import Navbar from './components/Navbar';
import ResumenEvento from './components/ResumenEvento';
import  { useState } from 'react';

const App = () => {
  const [misEventos, setMisEventos] = useState([]);

  const agregarEvento = (nuevoEvento) => {
    setMisEventos([...misEventos, nuevoEvento]);
  };

  return (
    <div>
      <div className="bg-blue-950 min-h-screen">
      <Navbar />
      <EventoForm onAgregarEvento={agregarEvento} />
      {misEventos.length > 0 && <ResumenEvento misEventos={misEventos} />}
    </div>
    </div>
  );
};

export default App;