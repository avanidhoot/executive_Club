import React, {Component} from 'react';
import axiosService from './src/common/services/axiosService';
import { Button, Text, View, AsyncStorage } from 'react-native';

export default class App extends Component{
  render() {
    return (
      <View style={{flex:1}}>
        <Text style={{}}>Welcome to Exec Club!</Text>
        <Text style={{}}>To get started, edit App.js</Text>
        <Text style={{}}>{"instructions"}</Text>
      </View>
    );
  }
}
