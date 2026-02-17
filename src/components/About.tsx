import './About.css';

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2 className="about-heading">
          En Colegas Spa promovemos la investigación para la generación de políticas públicas.
        </h2>
        
        <p className="about-description">
          Contamos con un equipo multidisciplinario de profesionales y técnicos que creen que el 
          trabajo colaborativo es la base de la transdisciplinariedad, formado por biólogos, 
          ingenieros civiles de diversas especialidades, abogados, psicólogos, antropólogos y docentes.
        </p>
        
        <div className="about-buttons">
          <button className="btn btn-primary">Leer más</button>
          <button className="btn btn-secondary">Nuestro Equipo</button>
        </div>
      </div>
    </section>
  );
};

export default About;
