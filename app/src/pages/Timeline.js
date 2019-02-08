import React, {Component} from 'react';
// import { GestureHandler } from 'expo';
import {
  View,
  StyleSheet,
  Text} from 'react-native';

export default class Timeline extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Timeline</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
  }
});
