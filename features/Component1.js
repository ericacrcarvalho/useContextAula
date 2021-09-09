import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyButton1 from '../components/button/MyButton1';

const Component1 = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Component1</Text>
        <MyButton1/>
    </View>
  );
}
export default Component1;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
  }
});
