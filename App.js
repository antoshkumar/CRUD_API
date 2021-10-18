import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import Display from './Components/Display'
import Register from './Components/Register'
import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';

 function HomeScreen({navigation}) {
  return (
     
      <View style={styles.container}>
      <Button 
        title="insert"
        onPress={() => navigation.navigate('Register')}
      />
       <Button color="blue" 
        title="display"
        onPress={() => navigation.navigate('Display')}
      /> 
       </View>
  );
    

    
  
}

const Stack = createStackNavigator();

function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="Register" component={Register} options={{title:'register'}} />
         <Stack.Screen name="Display" component={Display} options={{title:'display'}} /> 
         
     </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;

const styles=StyleSheet.create({
  container:{
    flex: 1, 
    alignItems: 'center',
     justifyContent: 'center',
     flexDirection:'row'
  }
})
