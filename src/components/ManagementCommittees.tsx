import './ManagementCommittees.css';
import { committeesList } from '../data/committees';

const ManagementCommittees = () => {
  const getImagePath = (imageName: string) => {
    try {
      const svgPath = new URL(`../assets/committes/${imageName}.svg`, import.meta.url).href;
      return svgPath;
    } catch {
      return '';
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, imageName: string) => {
    const img = e.currentTarget;
    if (!img.src.includes('.png')) {
      try {
        img.src = new URL(`../assets/committes/${imageName}.png`, import.meta.url).href;
      } catch {
        // Si ambos fallan, dejar en blanco
      }
    }
  };

  return (
    <section className="management-committees">
      <div className="container">
        <h2>Comités de manejo - Colegas Spa</h2>
        <div className="committees-grid">
          {committeesList.map((committee) => (
            <div key={committee.id} className="committee-card">
              <div className="committee-image">
                <img 
                  src={getImagePath(committee.imageName)} 
                  alt={committee.name}
                  onError={(e) => handleImageError(e, committee.imageName)}
                />
              </div>
              <h3>{committee.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementCommittees;
