import { useState } from "react";

const Evento = ({ Evento, setEvento, click, setClick }) => {
  const [tipoEvento, setTipoEvento] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setClick(!click);
    // Realizar acciones con los datos ingresados, como enviarlos al servidor, etc.
  };

  return (
    <div className="bg-blue-200 shadow-lg rounded-md my-10 py-5 w-1/3 md:w-1/3 mx-auto">
      <h2 className="text-blue-950 text-3xl text-center font-bold">
        Evento
      </h2>
      <form className="py-2 my-5 m-5" onSubmit={handleSubmit}>
        <input
          id="Evento"
          type="text"
          value={Evento}
          onChange={(e) => {
            if (Number(e.target.value) || e.target.value === "") {
              setEvento(e.target.value);
            }
          }}
          placeholder="Ingrese Evento"
          className="border-2 w-full p-1 bg-transparent text-black"
        />

        <select
          id="tipoEvento"
          value={tipoEvento}
          onChange={(e) => setTipoEvento(e.target.value)}
          className="border-2 w-full p-1 mt-4 bg-transparent"
        >
          <option value="">Seleccione el tipo de evento</option>
          <option value="Conferencia">Conferencia</option>
          <option value="Reunión">Reunión</option>
          <option value="Fiesta">Fiesta</option>
          <option value="Cumpleanios">Cumpleaños</option>
          <option value="Boda">Boda</option>
          {/* Agrega más opciones según tus necesidades */}
        </select>

        <input
          id="fecha"
          type="date"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
          className="border-2 w-full p-1 mt-4 bg-transparent"
        />

        <input
          type="submit"
          value="Agregar"
          className="bg-blue-950 w-full p-5 
                rounded-md my-5 text-white font-bold 
                cursor-pointer hover:bg-blue-700"
        />
      </form>
    </div>
  );
};

export default Evento;
