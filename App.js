import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import Display from './Components/Display'
import Register from './Components/Register'
import Update from './Components/update'
import Delete from './Components/delete'
import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';

 function HomeScreen({navigation}) {
  return (
     
      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>
            <View style={{height:50,width:'60%',alignItems:'center',justifyContent:'center'}}>
                 <Button 
                   title="insert"
                   onPress={() => navigation.navigate('Register')}
                 />
            </View>
            <View style={{height:50,width:'50%',alignItems:'center',justifyContent:'center'}}>
                <Button color="blue" 
                 title="display"
                 onPress={() => navigation.navigate('Display')}
                /> 
            </View> 
      </View>
      <View style={{flexDirection:'row'}}>
          <View style={{height:50,width:'60%',alignItems:'center',justifyContent:'center'}}>
            <Button color="pink"
              title="update"
              onPress={()=>navigation.navigate('Update')}
            />
          </View>
         <View style={{height:50,width:'50%',alignItems:'center',justifyContent:'center'}}>
            <Button 
             title="delete"
             onPress={() => navigation.navigate('Delete')}
            />
           </View>
        </View>
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
         <Stack.Screen name="Update" component={Update} options={{title:'update'}} />
         <Stack.Screen name="Delete" component={Delete} options={{title:'delete'}} />
         
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
     
  }
})
