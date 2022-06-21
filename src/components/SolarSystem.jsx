import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

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
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {renderPlanets()}
      </div>
    );
  }
}

export default SolarSystem;
