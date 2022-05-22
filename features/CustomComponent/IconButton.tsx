import { Text, TouchableOpacity } from "react-native";
import React, { Props } from "react";
import AppColors from "../utils/AppColors";
import Icon from "react-native-vector-icons/MaterialIcons";


export default function IconButton
(props: Props) {
  return (
    <TouchableOpacity onPress={() => {
      props.onPress();
    }} style={[{
      margin: props.margin ?? 10,
    }]}>
      <Icon name={props.name} size={props.size} color={props.color ?? "white"} />
    </TouchableOpacity>

  );

}
