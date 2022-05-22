import { Text, TouchableOpacity } from "react-native";
import React, { Props } from "react";
import AppColors from "../utils/AppColors";


export default function CustomBtn(props: Props) {
  return (
    <TouchableOpacity onPress={() => {
      props.onPress();
    }} style={[{
      margin: props.margin??10,
      backgroundColor: AppColors.primaryColor,
      alignSelf: "stretch",
      height: 50,
      borderRadius: 10,
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }]}>
      <Text style={[{ color: "white" }]}>{props.title}</Text>
    </TouchableOpacity>

  );

}
