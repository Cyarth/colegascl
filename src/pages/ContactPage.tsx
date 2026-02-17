import { useState } from 'react';
import '../styles/ContactPage.css';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    asunto: '',
    email: '',
    mensaje: '',
    sitioWeb: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    // Resetear el formulario
    setFormData({
      nombre: '',
      asunto: '',
      email: '',
      mensaje: '',
      sitioWeb: ''
    });
    alert('Mensaje enviado correctamente');
  };

  return (
    <div className="contact-page">
      <section className="contact-section">
        <div className="contact-container">
          {/* Formulario */}
          <div className="contact-form-wrapper">
            <h2>Contáctanos</h2>
            <p className="required-note">(*) Datos obligatorios</p>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre (*)"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="asunto"
                    placeholder="Asunto (*)"
                    value={formData.asunto}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email (*)"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="sitioWeb"
                    placeholder="Sitio Web"
                    value={formData.sitioWeb}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <textarea
                  name="mensaje"
                  placeholder="Mensaje (*)"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={6}
                ></textarea>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-send">Enviar</button>
              </div>
            </form>
          </div>

          {/* Información de contacto */}
          <div className="contact-info-wrapper">
            <div className="contact-info-grid">
              <div className="info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Dirección</h3>
                  <p>Avda. Diagonal Oriente 5468 – 205 A.</p>
                  <p>Ñuñoa, Santiago, CHILE</p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Móvil</h3>
                  <p>
                    <a href="tel:+56992301326">+569 9230 1326</a>
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Email</h3>
                  <p>
                    <a href="mailto:colegas@colegas.cl">colegas@colegas.cl</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
