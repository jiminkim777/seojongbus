import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function BusStation() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>버스정류장</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: 'white',
  },
  text: {
    color: '#ffffff',
    fontSize: 30,
  },
});
