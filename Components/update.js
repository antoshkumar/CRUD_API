import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Update extends React.Component {
  constructor(){
            super();
            this.state={  
                        id:" ",
                        first_name:" ",
                        last_name:" ",
                        email:" ",
                        gender:" "
                        }
                     }
// update method callling defination.........................................                 
    
            Update(){
                        let _id=Number.parseInt(this.state.id)
                        console.log("int data is",_id)
                        //   console.warn(this.state)
                        fetch('http://localhost:3900/students/'+_id, {
                         method:"PUT",
                         headers:{
                                    Accept: 'application/json',
                                    'Content-Type': 'application/json',
                                    'Access-Control-Allow-Origin':'origin'
                                 },
                                 body: JSON.stringify({
                                 first_name:this.state.first_name,
                                 last_name:this.state.last_name,
                                 email:this.state.email,
                                 gender:this.state.gender
                                })
                                }).then((result)=>{
                                result.json().then((resp)=>{
                                 console.log(resp);
                                alert("data update syccessfully")
                                })
                            })
                         }
            render(){
                    return (
                            <div>
                                <h1>Update Data</h1>
                             <div>
                                <input onChange={(event)=> {this.setState({id:event.target.value})}} placeholder="Enter Id"/>
                                <input onChange={(event)=> {this.setState({first_name:event.target.value})}} placeholder="Enter First name"/>
                                <input onChange={(event)=> {this.setState({last_name:event.target.value})}} placeholder="Enter last name"/>
                                <input onChange={(event)=> {this.setState({email:event.target.value})}} placeholder="Enter email"/>
                                <input onChange={(event)=> {this.setState({gender:event.target.value})}} placeholder="Enter gender"/>
                                <button onClick={()=>{this.Update()}} >Update</button>
                              </div>
                           </div>
                        );
                    }
                }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
