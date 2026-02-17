import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <h4>Colegas</h4>
              <ul>
                <li><a href="#">Somos Entidad ejecutora en el Banco de Proyectos del Ministerio de Obras Públicas (MOP).</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Contacto</h4>
              <ul>
                <li>📧 Enviar Mensaje Directo: info-colegas@colegas.cl</li>
                <li>📱 +56983572336</li>
                <li>📍 CONTACTO@COLEGAS.CL</li>
              </ul>
            </div>

            <div className="footer-column">
              <h4>Enlaces Rápidos</h4>
              <ul>
                <li><a href="#">✓ Cambio Climático</a></li>
                <li><a href="#">🏛 Región de Tarapacá</a></li>
                <li><a href="#">🏛 IRMA Zamora Colegas</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© Copyright 2026 | Hecho por Mairon Iturra</p>
            <div className="footer-links">
              <a href="#">Inicio</a> · 
              <a href="#">Servicios</a> · 
              <a href="#">Cookies</a> · 
              <a href="#">Cursos</a> · 
              <a href="#">Contacto</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
