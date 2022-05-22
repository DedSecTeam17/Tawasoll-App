import React, { useEffect } from "react";
import { Text, View } from "react-native";


export default function StoriesFragment() {
  useEffect(() => {
    console.log("RENDERING .....");
  }, []);
  return (
    <View><Text>StoriesFragment</Text></View>
  );
}
