import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const missonCardElements = missions.map((mission) => {
      const { name, year, country, destination } = mission;
      return (
        <li key={ name }>
          <MissionCard
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />
        </li>
      );
    });
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <ul>{missonCardElements}</ul>
      </div>
    );
  }
}

export default Missions;
