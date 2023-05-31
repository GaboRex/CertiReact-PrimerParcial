const ResumenEvento = ({ misEventos, onEliminarEvento }) => {
  return (
    <div className="bg-blue-200 shadow-lg rounded-md my-10 py-5 mx-auto max-w-2xl h-full">
      <h2 className="text-blue-950 text-3xl text-center font-bold mb-4">
        Mis eventos
      </h2>
      {misEventos.length > 0 ? (
        <div className="grid grid-cols-3 gap-4 h-full">
          {misEventos.map((evento, index) => (
            <div key={index} className="border-2 p-4  mr-2 ml-2 rounded-md flex flex-col justify-between h-full mb-4">
              <div>
                <strong>Evento:</strong> {evento.evento}
                <br />
                <strong>Tipo:</strong> {evento.tipoEvento}
                <br />
                <strong>Fecha:</strong> {evento.fecha}
              </div>
              <div className="flex justify-center">
                <button
                  onClick={() => onEliminarEvento(index)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No hay eventos</p>
      )}
    </div>
  );
};

export default ResumenEvento;