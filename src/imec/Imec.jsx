import "./imec.css";
import { Link } from "react-router-dom";

function Imec() {
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

      <div className="titulo">
            <h1 className="Cards-h1">Técnico em Mecânica</h1>
        </div>

      <div class="cards-list">
        <div class="card 1">
        <Link to="/cursos" className="navbarbutton">
          <div className="card_image_card">
            <img className="card_image_card" src="src/assets/ielemec1.png" />
          </div>
          </Link>
          <div class="card_title title-white">
            <p>IMEC1 - 2022</p> 
          </div>
        </div>

      <div class="card 2">
        <div className="card_image_card">
          <img className="card_image_card" src="src/assets/ielemec2.png" />
        </div>
        <div class="card_title title-white">
          <p>IMEC2 - 2023</p>
        </div>
      </div>
      
      <div class="card 3">
        <div className="card_image_card">
          <img className="card_image_card" src="https://cdn-icons-png.flaticon.com/512/4123/4123763.png" />
        </div>
        <div class="card_title title-white">
          <p>IMEC3 - 2024</p>
        </div>
      </div>


        
      </div>
    </>
  );
}

export default Imec;
