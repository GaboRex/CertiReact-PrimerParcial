import logo from "../assets/logo.png"; 
const Navbar = () => {
  return (
    <nav className="bg-blue-200 text-white py-1">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <img src={logo} alt="Logo" className="mr-2" style={{ width: "250px", height: "90px" }} /> {/* Ajusta el ancho y alto del logo */}
        </div>
        {/* Agrega aquí tus elementos de navegación, como enlaces, menús, etc. */}
      </div>
    </nav>
  );
};

export default Navbar;
