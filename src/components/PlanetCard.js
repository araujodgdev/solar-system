import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetname, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetname}</p>
        <img src={ planetImage } alt={ planetname } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetname: PropTypes.string.isRequired,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetImage: '',
};

export default PlanetCard;
