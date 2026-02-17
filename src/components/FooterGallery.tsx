import './FooterGallery.css';

const FooterGallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300',
    'https://images.unsplash.com/photo-1509043759401-136742328bb3?w=300',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=300',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300',
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=300'
  ];

  return (
    <section className="footer-gallery" aria-label="Galeria">
      {images.map((image, index) => (
        <div key={index} className="footer-gallery-image">
          <img src={image} alt={`Galeria ${index + 1}`} />
        </div>
      ))}
    </section>
  );
};

export default FooterGallery;
