import React from 'react';
import Missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';
import './styles/Missions.css';

function renderMissions() {
  return Missions.map((mission) => (
    <MissionCard
      name={ mission.name }
      year={ mission.year }
      country={ mission.country }
      destination={ mission.destination }
      key={ mission.name }
    />
  ));
}

class Mission extends React.Component {
  render() {
    return (
      <div className="missions-container" data-testid="missions">
        <Title headline="Missões" />
        <div className="missions-info-container">
          { renderMissions() }
        </div>
      </div>
    );
  }
}

export default Mission;
