/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import Store from '../src/hookContext/Store';
import Main from './Components/Main';

const App = () => {
  return (
    <Store>
      <Main />
    </Store>
  );
};
export default App;
