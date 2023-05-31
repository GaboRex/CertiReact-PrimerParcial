

import EventoForm from './components/EventoForm';
import Navbar from './components/Navbar';
import ResumenEvento from './components/ResumenEvento';
import  { useState } from 'react';
import  { useEffect } from 'react';

const App = () => {
  const [misEventos, setMisEventos] = useState([]);

  // Cargar los datos del Local Storage al cargar el componente
  useEffect(() => {
    const eventosGuardados = localStorage.getItem('eventos');
    if (eventosGuardados) {
      setMisEventos(JSON.parse(eventosGuardados));
    }
  }, []);

  // Guardar los datos en el Local Storage cuando misEventos cambie
  useEffect(() => {
    localStorage.setItem('eventos', JSON.stringify(misEventos));
  }, [misEventos]);

  const agregarEvento = (nuevoEvento) => {
    setMisEventos([...misEventos, nuevoEvento]);
  };

  const eliminarEvento = (index) => {
    const nuevosEventos = [...misEventos];
    nuevosEventos.splice(index, 1);
    setMisEventos(nuevosEventos);
  };

  return (
    <div>
      <div className="bg-blue-950 min-h-screen">
        <Navbar />
        <EventoForm onAgregarEvento={agregarEvento} />
        {misEventos.length > 0 && (
          <ResumenEvento misEventos={misEventos} onEliminarEvento={eliminarEvento} />
        )}
      </div>
    </div>
  );
};

export default App;