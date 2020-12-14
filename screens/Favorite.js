import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default function Favorite({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text style={styles.text}>즐겨찾기</Text>
      <Button title="Movie" onPress={() => navigation.navigate('Detail')} />
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
