import React from 'react';
import Title from './Title';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetElements = Planets.map((planet) => (
      <li key={ planet.name }>
        <PlanetCard planetName={ planet.name } planetImage={ planet.image } />
      </li>
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <ul>
          {planetElements}
        </ul>
      </div>
    );
  }
}

export default SolarSystem;
