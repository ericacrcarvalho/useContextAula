import React, { createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Component1 from './features/Component1';

export const MyContext1 = createContext();

const App = () => {

  const texto = "Clique aqui";
  const color = "red";
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>useContext {count}</Text>
      <MyContext1.Provider value={{ texto, color, count, setCount }}>
        
        
        <Component1/>


        </MyContext1.Provider>
    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
