/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Goat.scss';
import PropTypes from 'prop-types';
import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes ={
    goat: goatShape.goatShape,
    takeAGoat: PropTypes.func,
    freeAGoat: PropTypes.func,
  }

  takeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, takeAGoat } = this.props;
    takeAGoat(goat.id);
  };

  freeGoatEvent = (e) => {
    e.preventDefault();
    const { goat, freeAGoat } = this.props;
    freeAGoat(goat.id);
  };

  render() {
    const { goat } = this.props;

    return (
            <div className="card goatCard">
              <img className="card-img-top" src={goat.imgUrl} alt="Card image cap"/>
              <div className="card-img-overlay">
                <h5 className="card-title text-uppercase">{goat.name}</h5>
                <p className="card-text">This goat is {goat.age} years old and are described as: {goat.description}</p>
              </div>
              <div className='card-footer'>
                 { goat.isTaken
                   ? (<button className='btn btn-danger col-12' onClick={this.freeGoatEvent}>FREE THE GOAT</button>)
                   : (<button className='btn btn-success col-12' onClick={this.takeGoatEvent}>TAKE THE GOAT</button>)
                 }
              </div>
          </div>
    );
  }
}

export default Goat;
