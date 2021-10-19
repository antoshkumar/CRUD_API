import React, { useEffect, useState } from 'react';
import { StyleSheet,View,Text,FlatList,Image, TouchableOpacity
} from 'react-native';

export default class display extends React.Component{
      constructor(){
                  super();
                  this.state={
                   data:[]
                  }
                }

  componentDidMount(){
                    this.callApi();
                   }

// callApi Method defination............................
          async callApi(){
                      let resp=await fetch('http://localhost:3900/students')
                      let respJson=await resp.json();
                      this.setState({data:respJson})
                      // console.warn("sgow data",respJson)
                       }

    render(){
          // console.warn(this.state.data)
             return(
                     <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                        <Text style={{ fontSize:20,}}>Api data</Text>
                        <FlatList
                            data={this.state.data}
                            renderItem={({item})=>
                            <View style={{flexDirection:'row',flex:1}}>
                              <Text style={{fontSize:12,marginLeft:8}}>{item.id}</Text>
                              <Text style={{fontSize:12,marginLeft:8}}>{item.first_name}</Text>
                              <Text style={{fontSize:12,marginLeft:8}}>{item.last_name}</Text>
                              <Text style={{fontSize:12,marginLeft:8}}>{item.email}</Text>
                              <Text style={{fontSize:12,marginLeft:8}}>{item.gender}</Text>
                            </View>
                            }
                          />
                       </View>
                     );
                    }  
                  }