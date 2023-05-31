import { useState, useEffect } from "react";

const EventoForm = ({ onAgregarEvento }) => {
  const [evento, setEvento] = useState("");
  const [tipoEvento, setTipoEvento] = useState("");
  const [fecha, setFecha] = useState("");
  const [exito, setExito] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Aqui podemos verificar si algun campo esta vacio
    if (!evento || !tipoEvento || !fecha) {
      alert("Por favor, completa todos los campos");
      return;
    }

    // Creamos un objeto de tipo nuevoEvento
    const nuevoEvento = {
      evento,
      tipoEvento,
      fecha,
    };

    // Lo agregamos con esta funcion
    onAgregarEvento(nuevoEvento);

    //Limpiamos nuestro formulario
    setEvento("");
    setTipoEvento("");
    setFecha("");
    setExito(true);
  };

  useEffect(() => {
    if (exito) {
      const timeout = setTimeout(() => {
        setExito(false);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [exito]);

  return (
    <div className="bg-blue-200 shadow-lg rounded-md my-10 py-5 w-1/3 md:w-1/3 mx-auto">
      <h2 className="text-blue-950 text-3xl text-center font-bold">
        Evento
      </h2>
      {exito && (
        <p className="text-green-600 text-center font-bold">
          ¡Tu evento fue registrado con éxito!
        </p>
      )}
      <form className="py-2 my-5 m-5" onSubmit={handleSubmit}>
        <input
          id="Evento"
          type="text"
          value={evento}
          onChange={(e) => setEvento(e.target.value)}
          placeholder="Ingrese Evento"
          className="border-2 w-full p-1 bg-transparent text-black placeholder-blue-950"
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
          <option value="Cumpleaños">Cumpleaños</option>
          <option value="Boda">Boda</option>
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
          value="Agregar evento a nuestra agenda"
          className="bg-blue-950 w-full p-5 
                rounded-md my-5 text-white font-bold 
                cursor-pointer hover:bg-blue-700"
        />
      </form>
    </div>
  );
};

export default EventoForm;
