import "./consultas.css";
import { Link } from "react-router-dom";

function Consultas() {
  return (
    <>
      <header>
      <img className="senailogo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjYaEKq6nZmPLHcIDhOAs3DB1HZPFIZJalDrKwoDae&s"
            alt="Senai Logo"
          />

        <div className="navbartop">
        <Link to="/home" className="navbarbutton">
              Home
        </Link>
        
        <Link to="/" className="navbarbutton">
              Usuários
        </Link>

        <Link to="/cursos" className="navbarbutton">
             Cursos
        </Link>


        </div>
      </header>
    </>

    );
}

export default Consultas;