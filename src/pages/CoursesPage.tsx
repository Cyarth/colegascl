import '../styles/CoursesPage.css';
import CoursesCarousel from '../components/CoursesCarousel';
import Footer from '../components/Footer';

const CoursesPage = () => {
  return (
    <div className="courses-page">
      <section className="courses-section">
        <div className="courses-container">
          <div className="courses-content">
            <h2>Generación de Capacidades</h2>
            <p>
              Diseñamos cursos-taller destinados a generar capacidades, para lo cual, integramos de
              tres paradigmas socioeducativos que confluyen adecuadamente para la andragogía, el
              contextual, el constructivista y el modelo de aprendizaje por competencias. Diseñamos
              módulos de capacitación basados en un modelo de enseñanza centrado en la vida y en
              el contexto socio-cultural-natural, con el fin de favorecer el aprendizaje significativo a
              partir de la experiencia de los participantes. Desde el contextualismo – constructivista, el
              sentido de los aprendizajes se obtiene de los símbolos y significados aprendidos en
              sociedad que rigen los procesos cognitivos del individuo. Entendemos que las personas
              responden a los estímulos de acuerdo a los códigos de su cultura, por eso diseñamos
              para cada usuario considerando que el lenguaje que es la expresión del modo de pensar
              de los individuos, que se diferencia entre una comunidad y otra. Son las tradiciones
              culturales y las prácticas sociales las que regulan, transforman y dan expresión al
              psiquismo humano, que se caracteriza más por la divergencia étnica o cultural que por la
              unicidad de lo psicológico. Aprovechamos que dentro de cada comunidad o grupo se da
              una diversidad cognitiva, diversidad de talentos y habilidades, los que actuando de forma
              colaborativa, logran generar un conocimiento comunitario que se traspasa como parte
              del acervo cultural de la comunidad. Un modelo de aprendizaje competencial permitirá
              desarrollar conductas y habilidades de acuerdo al nivel y estilo cognitivo de cada
              participante de la capacitación, permitirá que cada cual se aprope de su proceso de
              enseñanza aprendizaje y sea capaz de desarrollar un plan de mejora, según los cuatro
              pilares básicos del aprendizaje por competencias: aprender a conocer, aprender a hacer,
              aprender a vivir juntos y aprender a ser (UNESCO, 1998).
            </p>

            <a href="#" className="btn-courses-online">Cursos Online</a>
          </div>

          <div className="courses-carousel-container">
            <CoursesCarousel />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CoursesPage;
