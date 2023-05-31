import { useState, useEffect } from "react";
import EventoForm from "./components/EventoForm";
import Navbar from "./components/Navbar";
import ResumenEvento from "./components/ResumenEvento";
import Modal from "./components/Modal";

const App = () => {
  const [misEventos, setMisEventos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [eventCounters, setEventCounters] = useState({});

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    // Cargar los datos del Local Storage al iniciar la aplicación
    const storedEventos = localStorage.getItem("eventos");
    if (storedEventos) {
      setMisEventos(JSON.parse(storedEventos));
    }
  }, []);

  useEffect(() => {
    // Guardar los datos en el Local Storage al modificar misEventos
    localStorage.setItem("eventos", JSON.stringify(misEventos));

    // Calcular los contadores de eventos al cargar o modificar misEventos
    const counters = misEventos.reduce((counters, evento) => {
      const tipoEvento = evento.tipoEvento;
      counters[tipoEvento] = (counters[tipoEvento] || 0) + 1;
      return counters;
    }, {});

    setEventCounters(counters);
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
          <ResumenEvento
            misEventos={misEventos}
            onEliminarEvento={eliminarEvento}
          />
        )}
      </div>
      <div className="fixed bottom-0 right-0 m-4">
        <button
          onClick={toggleModal}
          className="bg-blue-200 text-blue-950 px-4 py-2 rounded-md"
        >
          Ver Contadores
        </button>
      </div>
      {modalOpen && (
        <Modal onClose={toggleModal}>
          <h2 className="text-blue-950 text-3xl text-center font-bold">
            Contadores de Evento
          </h2>
          <ul className="space-y-4">
            {Object.entries(eventCounters).map(([tipoEvento, count]) => (
              <li key={tipoEvento}>
                <strong>{tipoEvento}:</strong> {count}
              </li>
            ))}
          </ul>
        </Modal>
      )}
    </div>
  );
};

export default App;