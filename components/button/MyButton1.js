import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { MyContext1 } from '../../App';

const MyButton1 = () => {

const {texto, color, count, setCount} = useContext(MyContext1);

  return (
    <View style={styles.container}>
        <Text style={{fontSize:24}}>Contador: {count}</Text>
      <Button
        title={texto}
        onPress={() => setCount(count+1)}
        color={color}
      />
    </View>
  );
}
export default MyButton1;

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
