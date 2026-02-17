import { useState, useEffect, useRef } from 'react';
import '../styles/CoursesCarousel.css';

const CoursesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      title: 'Capacitación Profesional'
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      title: 'Seminarios'
    },
    {
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      title: 'Talleres Interactivos'
    }
  ];

  useEffect(() => {
    if (isInteracting) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length, isInteracting]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 6000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const difference = touchStart - touchEnd;

    if (Math.abs(difference) > swipeThreshold) {
      if (difference > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      setIsInteracting(true);
      setTimeout(() => setIsInteracting(false), 6000);
    }
  };

  return (
    <div
      className="courses-carousel"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="slide-overlay"></div>
        </div>
      ))}

      <button className="carousel-btn prev" onClick={prevSlide} aria-label="Anterior">
        ‹
      </button>
      <button className="carousel-btn next" onClick={nextSlide} aria-label="Siguiente">
        ›
      </button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Ir a slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CoursesCarousel;
