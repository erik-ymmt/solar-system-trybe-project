import React from 'react';
import Missions from '../data/missions';
import MissionCard from './MissionCard';
import Title from './Title';
import './styles/Missions.css';

class Mission extends React.Component {
  render() {
    const { selectPlanet } = this.props;
    return (
      <div className="missions-container" data-testid="missions">
        <Title headline="Missões" />
          <div className="missions-info-container">
            {
              Missions.map((mission) => {
                if (mission.destination === selectPlanet) {
                  return (
                    <MissionCard
                    name={ mission.name }
                    year={ mission.year }
                    country={ mission.country }
                    destination={ mission.destination }
                    key={ mission.name }
                    selected = { 'selected' }
                    />
                  )
                } else {
                  return (
                    <MissionCard
                    name={ mission.name }
                    year={ mission.year }
                    country={ mission.country }
                    destination={ mission.destination }
                    key={ mission.name }
                    selected = { '' }
                    />
                  )
                }
              })
            }
            {
              (selectPlanet === 'Urano'|| selectPlanet === 'Netuno')
              ? <p className='observation'>OBS.: Não há missões para Urano e Netuno na base de dados</p>
              : <></>
            }
          </div>
      </div>
    );
  }
}

export default Mission;
