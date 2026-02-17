import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '📋',
      title: 'Capacitación',
      description: 'Generamos instancias de mediación y fortalecimiento de capacidades y habilidades de individuos metodologías y herramientas informáticas con taller que se ajustan a las necesidades de cada institución.'
    },
    {
      icon: '🎯',
      title: 'Asesorías',
      description: 'Contamos con educadores, generamos de trabajo y procesos estudiados y necesidades de cada institución.'
    },
    {
      icon: '📊',
      title: 'Estudios de investigación',
      description: 'Desarrollamos proyectos de investigación participativos en una amplia gama de temas, con diseños acorde a la complejidad de cada proyecto.'
    },
    {
      icon: '🧩',
      title: 'Servicios de facilitación',
      description: 'En COLEGAS SPA contamos un equipo de gran experiencia en el diseño de espacios de conversación sistémica.'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#" className="service-link">Leer más</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
