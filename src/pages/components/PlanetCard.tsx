import { useState } from "react";
import myData from "../../data.json";

const { destinations } = myData;

const Destinations = () => {
  const [currentDestination, setCurrentDestination] = useState(destinations[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDestinationClick = (index: number) => {
    setCurrentDestination(destinations[index]);
    setActiveIndex(index);
  };

  return (
    <div className="two-column">
      <div className="left-col">
        <img
          src={currentDestination.images.png}
          alt={currentDestination.name}
        />
      </div>
      <div className="right-col">
        <nav>
          {destinations.map((destination, index) => (
            <a
              key={index}
              onClick={() => handleDestinationClick(index)}
              href="#"
              className={activeIndex === index ? "isActive" : "none"}
            >
              {destination.name}
            </a>
          ))}
        </nav>
        <div>
          <h2>{currentDestination.name}</h2>

          <p className="description">{currentDestination.description}</p>
        </div>
        <div className="card-bottom">
          <div className="card-bottom-left">
            <p className="text">AVG. DISTANCE</p>
            <h4>{currentDestination.distance}</h4>
          </div>
          <div className="card-bottom-right">
            <p className="text">EST. TRAVEL TIME</p>
            <h4>{currentDestination.travel}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations;
