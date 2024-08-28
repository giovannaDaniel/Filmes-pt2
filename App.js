
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Route from './src/Routes';
export default function App() {
  return (

    <NavigationContainer>
      <Route></Route>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#141a29',
    alignItems:"center"
    
    
  },
});
