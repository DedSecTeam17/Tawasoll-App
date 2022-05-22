import React, { useEffect } from "react";
import { Text, View } from "react-native";


export  default function PrivateFragment(){
  useEffect(()=>{
    console.log("RENDERING .....")
  },[])
  return (
    <View><Text>PrivateFragment</Text></View>
  )
}
