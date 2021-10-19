import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Update extends React.Component {
  constructor(){
            super();
                this.state={
                id:" "
                 }
                }

// delete method calling defination........
                 Delete(){
                        let _id=Number.parseInt(this.state.id)
                        if(window.confirm("are u sure want to delete")){
                        fetch('http://localhost:3900/students/'+_id,{method:"DELETE"})
                        .then((result)=>{
                         result.json().then((resp)=>{
                         console.log(resp);
                         alert("data deletd successfully")
                        })
                      })
                     }   
                    }
                render(){
                        return (
                                <div>
                                    <h1>Delete Data</h1>
                                    <div>
                                    <input onChange={(event)=> {this.setState({id:event.target.value})}} placeholder="Enter Id"/>
                                     <button onClick={()=>{this.Delete()}} >delete</button>
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
