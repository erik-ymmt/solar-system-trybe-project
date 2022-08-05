import React from 'react';
import PropTypes from 'prop-types';
import './styles/MissionsCard.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination, selected } = this.props;
    return (
      <div className={`mission-card ${selected}`} data-testid="mission-card">
        <h3 data-testid="mission-name">
          {name}
        </h3>
        <hr />
        <p data-testid="mission-year">
          {year}
        </p>
        <p data-testid="mission-country">
          {country}
        </p>
        <p data-testid="mission-destination">
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
