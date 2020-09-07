import React from 'react';
import PropTypes from 'prop-types';
import Goat from '../Goat/Goat';
import goatShape from '../../helpers/propz/goatShape';

class GoatCorral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
    takeAGoat: PropTypes.func,
    freeAGoat: PropTypes.func,
  }

  render() {
    const { goats, takeAGoat, freeAGoat } = this.props;

    const goatCards = goats.map((goat) => (<Goat key={goat.id} goat={goat} takeAGoat={takeAGoat} freeAGoat={freeAGoat}/>));

    return (
        <div>
        <h2>GET YOUR GOAT</h2>
        {goatCards}
        </div>
    );
  }
}

export default GoatCorral;
