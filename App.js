import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/config/Navigation';
import { EditProfile } from './src/screens';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation/>
      {/* <EditProfile/> */}
      {/* <StatusBar /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FFFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
