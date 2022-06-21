import React from 'react';
import Missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';

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
      <div data-testid="missions">
        <Title headline="Missões" />
        { renderMissions() }
      </div>
    );
  }
}

export default Mission;
