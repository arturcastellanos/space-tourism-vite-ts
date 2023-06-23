import Navbar from "./components/Navbar.js";
import PlanetCard from "./components/PlanetCard.js";

export default function Destination() {
  return (
    <div className="destination">
      <Navbar />
      <h5>PICK YOUR DESTINATION</h5>
      <PlanetCard />
    </div>
  );
}
