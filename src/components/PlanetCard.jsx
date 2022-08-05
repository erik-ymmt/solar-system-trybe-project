import React from 'react';
import PropTypes from 'prop-types';
import './styles/PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, handleClick } = this.props;
    return (
      <div className="planet-card" data-testid="planet-card">
        <img
          className="planet-img"
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          onClick={ () => handleClick(planetName) }
        />
        <p data-testid="planet-name">{planetName}</p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
