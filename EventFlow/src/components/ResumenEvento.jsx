
const ResumenEvento = ({ misEventos }) => {
  return (
    <div className="bg-blue-200 shadow-lg rounded-md my-10 py-5 w-1/3 md:w-1/3 mx-auto">
      <h2 className="text-blue-950 text-3xl text-center font-bold">
        Mis eventos
      </h2>
      <ul>
        {misEventos.map((evento, index) => (
          <li key={index}>
            <strong>Evento:</strong> {evento.evento}<br />
            <strong>Tipo:</strong> {evento.tipoEvento}<br />
            <strong>Fecha:</strong> {evento.fecha}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumenEvento;
