import './ServicesPage.css';
import Footer from '../components/Footer';

const ServicesPage = () => {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero-line"></div>
      </section>

      <section className="services-content">
        <div className="container">
          <div className="services-grid-page">
            {/* Capacitación */}
            <div className="service-item">
              <div className="service-icon-large">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
                </svg>
              </div>
              <h2>Capacitación</h2>
              <p className="service-text-justified">
                Diseñamos cursos-talleres destinados a generar capacidades, para lo cual 
                integramos tres paradigmas socioeducativos que confluyen adecuadamente para la 
                andragogía, el contextual, el constructivista y el modelo de aprendizaje por 
                competencias. Diseñamos módulos de capacitación basados en un modelo de 
                enseñanza centrado en la vida y en el contexto socio-cultural-natural, con el fin de 
                favorecer el aprendizaje significativo a partir de la experiencia de los participantes.
              </p>
            </div>

            {/* Asesorías */}
            <div className="service-item">
              <div className="service-icon-large">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                </svg>
              </div>
              <h2>Asesorías</h2>
              <p className="service-text-justified">
                COLEGAS SpA asesora en la construcción de soluciones, generación de planes y 
                procesos, diagnósticos y evaluaciones participativas, desarrollo de mecanismos de 
                evaluación de planes y programas, facilitación del diálogo entre actores y diseño de 
                intervenciones.
              </p>
            </div>

            {/* Estudios de investigación */}
            <div className="service-item">
              <div className="service-icon-large">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 9.2h3V19H5zM10.6 5h2.8v14h-2.8zm5.6 8H19v6h-2.8z"/>
                </svg>
              </div>
              <h2>Estudios de investigación</h2>
              <p className="service-text-justified">
                Tanto en el ámbito público como privado desarrollamos proyectos de investigación y 
                desarrollo de modo colaborativo. Nuestra experiencia en estudios e investigación se 
                enfoca principalmente en los ámbitos: salud, social, ciencias del mar, enfoque 
                ecosistémico y manejo de recursos naturales. Estamos interesados en la generación 
                planes: programas y políticas públicas u organizacionales que tengan asociado el 
                concepto EIR (Evaluación de Impacto Regulatorio) o EIRI (Evaluación de Impacto 
                Regulatorio Inverso).
              </p>
            </div>

            {/* Servicio de facilitación */}
            <div className="service-item">
              <div className="service-icon-large">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
                </svg>
              </div>
              <h2>Servicio de facilitación</h2>
              <p className="service-text-justified">
                En COLEGAS SpA poseemos un equipo de gran trayectoria en el ámbito de la 
                facilitación en variadas áreas de desempeño que van desde facilitación para el trabajo 
                de grupos de expertos hasta la facilitación de procesos grupales comunitarios y 
                facilitación para establecimiento de prioridades.
              </p>
              <ul className="service-list">
                <li>Facilitación de procesos grupales</li>
                <li>Facilitación de procesos participativos</li>
                <li>Facilitación para la construcción de proyectos comunitarios</li>
                <li>Facilitación para la negociación</li>
                <li>Facilitación para facilitadores</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;
