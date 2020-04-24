import React, { Component } from 'react';
import { StyleSheet, Text, Keyboard,  View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, Platform,Button, Image, TouchableHighlight,} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Homescreen from './src/login/homescreen.js';
import Watch from './src/login/watch.js';
import Upload from './src/login/upload.js';
import History from './src/login/history.js';






const RootStack = createStackNavigator(
{
  Home: { screen: Homescreen },
  Watch: {screen: Watch },
  Upload: {screen: Upload },
  
  
},
{
    initialRouteName: 'Home',
}

);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

