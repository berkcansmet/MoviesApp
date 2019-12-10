//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Home from './Screens/Home';
import Detay from './Screens/Detay';
import { Router, Stack, Scene } from 'react-native-router-flux';

// create a component
class App extends Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key = 'Home'
          component = {Home}
          title = 'Home'
          hideNavBar
          />
          <Scene key = 'Detay'
          component = {Detay}
          title = 'Detay'
          hideNavBar
          />
        </Stack>
      </Router>
      
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;
