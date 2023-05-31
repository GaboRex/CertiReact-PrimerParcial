const ResumenEvento = ({ misEventos, onEliminarEvento }) => {
  return (
    <div className="bg-blue-200 shadow-lg rounded-md my-10 py-5 w-1/3 md:w-1/3 mx-auto">
      <h2 className="text-blue-950 text-3xl text-center font-bold">
        Mis eventos
      </h2>
      {misEventos.length > 0 ? (
        <ul className="space-y-4">
          {misEventos.map((evento, index) => (
            <li key={index} className="border-2 p-4 rounded-md">
              <strong>Evento:</strong> {evento.evento}
              <br />
              <strong>Tipo:</strong> {evento.tipoEvento}
              <br />
              <strong>Fecha:</strong> {evento.fecha}
              <br />
              <button
                onClick={() => onEliminarEvento(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No hay eventos</p>
      )}
    </div>
  );
};

export default ResumenEvento;