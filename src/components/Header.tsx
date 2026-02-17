import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Colegas - Inteligencia Colaborativa" className="logo-image" />
        </div>
        
        <button className="burger-menu" onClick={toggleMenu} aria-label="Abrir menú">
          <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
          <span className={`burger-line ${isMenuOpen ? 'active' : ''}`}></span>
        </button>
        
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>INICIO</Link>
          <Link to="/servicios" className="nav-link" onClick={closeMenu}>SERVICIOS</Link>
          
          <div className="nav-dropdown">
            <a href="#comites" className="nav-link">COMITÉS DE MANEJO</a>
            <div className="dropdown-content">
              <a href="#comites-manejo" onClick={closeMenu}>Comités de Manejo</a>
              <a href="#normativa" onClick={closeMenu}>Normativa</a>
              <a href="#novedades" onClick={closeMenu}>Novedades o Noticias</a>
            </div>
          </div>
          
          <Link to="/cursos" className="nav-link" onClick={closeMenu}>CURSOS</Link>
          <a href="#contacto" className="nav-link" onClick={closeMenu}>CONTACTO</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
