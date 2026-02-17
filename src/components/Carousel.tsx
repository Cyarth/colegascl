import { useState, useEffect, useRef } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?w=1600',
      title: 'Incentivamos el trabajo colaborativo relacionando su experiencia y conocimientos, utilizando herramientas técnicas, con las necesidades de manejo del conocimiento de los actores involucrados en cada proyecto'
    },
    {
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600',
      title: 'Somos una organización que se basa en la inteligencia colaborativa para desarrollar proyectos de investigación'
    },
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600',
      title: 'Generamos estudios e investigaciones para la gestión sustentable de recursos naturales'
    }
  ];

  useEffect(() => {
    if (isInteracting) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length, isInteracting]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 8000);
  };

  const nextSlideWithPause = () => {
    nextSlide();
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 8000);
  };

  const prevSlideWithPause = () => {
    prevSlide();
    setIsInteracting(true);
    setTimeout(() => setIsInteracting(false), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
      setTimeout(() => setIsInteracting(false), 8000);
    }
  };

  return (
    <div 
      className="carousel"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="carousel-overlay"></div>
          <div className="carousel-content">
            <h1>{slide.title}</h1>
          </div>
        </div>
      ))}

      <button className="carousel-btn prev" onClick={prevSlideWithPause}>
        ‹
      </button>
      <button className="carousel-btn next" onClick={nextSlideWithPause}>
        ›
      </button>

      <div className="carousel-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
