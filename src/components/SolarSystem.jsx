import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
import './styles/SolarSystem.css';

function renderPlanets() {
  return Planets.map((planet) => (
    <PlanetCard
      planetName={ planet.name }
      planetImage={ planet.image }
      key={ planet.name }
    />
  ));
}

class SolarSystem extends React.Component {
  render() {
    return (
      <div className="solar-system-container" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets-container">
          {renderPlanets()}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
