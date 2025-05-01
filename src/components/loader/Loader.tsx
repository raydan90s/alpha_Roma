import Logo from "../../assets/img/novaFenix.png";

const Loader = () => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="w-12 h-12 border-4 border-primary border-dashed rounded-full animate-spin" >
            <img src={Logo} alt="Logo" className="w-full h-full object-cover" />

            </div>
      </div>
    );
  };
  
  export default Loader;