import Carousel from '../components/Carousel';
import About from '../components/About';
import ManagementCommittees from '../components/ManagementCommittees';
import Services from '../components/Services';
import Newsletter from '../components/Newsletter';
import FooterGallery from '../components/FooterGallery';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Carousel />
      <About />
      <ManagementCommittees />
      <Services />
      <Newsletter />
      <FooterGallery />
      <Footer />
    </>
  );
};

export default HomePage;
