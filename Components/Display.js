import React, { useEffect, useState } from 'react';
import { StyleSheet,View,Text,FlatList,Image, TouchableOpacity
} from 'react-native';

export default function display(){
  const [data, setData]=React.useState([])
  useEffect(()=>{
    fetch("http://localhost:3900/students/").then((result)=>{
      result.json().then((resp)=>{
        setData(resp)
      })
    })
  },[])
  console.log(data)
  return(
    <div>
      <table border="1">
        <tr>
          <td>Id</td>
          <td>first_Name</td>
          <td>Last_Name</td>
          <td>Gender</td>
          <td>Email</td>
        </tr>
        {
        data.map((items)=>
          <tr>
          <td>{items.id}</td>
          <td>{items.first_name}</td>
          <td>{items.last_name}</td>
          <td>{items.email}</td>
          <td>{items.gender}</td>
        </tr>
        )
    }
    </table>
    </div>
  );
}  