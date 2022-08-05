import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
import './styles/SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    const {selectPlanet} = this.props;
    return (
      <div className="solar-system-container" data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planets-container">
          {
            Planets.map((planet) => (
              <PlanetCard
              planetName={ planet.name }
              planetImage={ planet.image }
              key={ planet.name }
              handleClick = { (planetName) => selectPlanet(planetName) }
              />
              ))
            }
        </div>
        <h5>Selecione um planeta e veja as missões realizadas!</h5>
      </div>
    );
  }
}

export default SolarSystem;
