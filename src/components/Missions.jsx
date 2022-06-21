import React from 'react';
import MissionCard from './MissionCard';
import Title from './Title';

class Mission extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <MissionCard name="teste" />
      </div>
    );
  }
}

export default Mission;
