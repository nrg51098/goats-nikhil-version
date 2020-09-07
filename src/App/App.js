import React from 'react';
import './App.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import fbConnection from '../helpers/data/connection';

// import GoatCorral from '../components/GoatCorral/GoatCorral';

import goatData from '../helpers/data/goatData';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import Auth from '../components/Auth/Auth';

fbConnection();

class App extends React.Component {
  state = {
    // goats: [],
    authed: false,
  }

  componentDidMount() {
    // const goats = goatData.getGoats();
    // this.setState({ goats });

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  takeAGoat = (goatId) => {
    // call our helper/data function
    goatData.takeGoat(goatId);
    // get all the updated goats
    const goats = goatData.getGoats();
    // update state
    this.setState({ goats });
  }

  freeAGoat = (goatId) => {
    // call our helper/data function
    goatData.freeGoat(goatId);
    // get all the updated goats
    const goats = goatData.getGoats();
    // update state
    this.setState({ goats });
  }

  render() {
    const { authed } = this.state;

    const loadComponent = () => {
      // eslint-disable-next-line no-console
      console.log(authed);
      if (authed) {
        return <MyNavbar/>;
      }
      return <Auth/>;
    };

    return (
      <div className="App">
        <h2>INSIDE APP COMPONENT</h2>
        {
          loadComponent()
        }
      </div>
    );
  }
}

export default App;
