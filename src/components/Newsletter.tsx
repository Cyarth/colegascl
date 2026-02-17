import { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-content">
          <h3>Newsletter</h3>
          <p>¿Quiere recibir nuestro boletín de novedades y noticias?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Ingresa tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Suscribirse</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
