import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Colegas - Inteligencia Colaborativa" className="logo-image" />
        </div>
        
        <nav className="nav">
          <Link to="/" className="nav-link">INICIO</Link>
          <Link to="/servicios" className="nav-link">SERVICIOS</Link>
          
          <div className="nav-dropdown">
            <a href="#comites" className="nav-link">COMITÉS DE MANEJO</a>
            <div className="dropdown-content">
              <a href="#comites-manejo">Comités de Manejo</a>
              <a href="#normativa">Normativa</a>
              <a href="#novedades">Novedades o Noticias</a>
            </div>
          </div>
          
          <a href="#cursos" className="nav-link">CURSOS</a>
          <a href="#contacto" className="nav-link">CONTACTO</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
