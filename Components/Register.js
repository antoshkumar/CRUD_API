import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
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
    // insert method calling defination ..............................        
        insert(){
                console.warn(this.state)
                fetch('http://localhost:3900/students', {
                 method:"POST",
                headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
               'Access-Control-Allow-Origin':'origin'
               },
               body: JSON.stringify(this.state)   
              }).then((result)=>{
               result.json().then((resp)=>{
              console.log(resp);
              alert("data inserted syccessfully")
              })
              })
            }

  render(){
          return (
              <div>
                  <h1>Registration</h1>
                <div>
                  <input onChange={(event)=> {this.setState({id:event.target.value})}} placeholder="Enter Id"/>
                  <input onChange={(event)=> {this.setState({first_name:event.target.value})}} placeholder="Enter First name"/>
                  <input onChange={(event)=> {this.setState({last_name:event.target.value})}} placeholder="Enter last name"/>
                  <input onChange={(event)=> {this.setState({email:event.target.value})}} placeholder="Enter email"/>
                  <input onChange={(event)=> {this.setState({gender:event.target.value})}} placeholder="Enter gender"/>
                  <button onClick={()=>{this.insert()}} >register</button>
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
