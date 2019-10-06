import React from 'react';
import {NetInfo, AppState, Linking} from 'react-native';

// library imports
import {Router, Scene, Actions} from 'react-native-router-flux';

// file screens imports
import Main from './Components/Main';

const Routers = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="Main" component={Main} hideNavBar />
      </Scene>
    </Router>
  );
};
export default Routers;
