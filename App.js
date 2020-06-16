import React, {Component} from 'react';
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import Input from './Inputs';
import image from './assets/images/sunset.jpg';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.text}>Meditations</Text>
          <Input />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  text: {
    alignContent: 'center',
    color: 'white',
    fontSize: 28,
    paddingTop: 20,
  },
});
