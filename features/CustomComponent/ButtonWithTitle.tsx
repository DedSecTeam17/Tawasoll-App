import React, { Props } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import AppColors from "../utils/AppColors";
import { SpacerH } from "./Spacer";


export function IconButtonWithTitle
(props: Props) {
  return (

      <TouchableOpacity onPress={() => {
        props.onPress();
      }} style={[{
        margin: props.margin ?? 15,
        flexDirection: "column", alignItems: "center", alignContent: "center" ,justifyContent : "center"
      }]}>
        <View style={{
          backgroundColor: AppColors.primaryColor,
          opacity: 0.8,
          width: props.size + 20,
          height: props.size + 20,
          flexDirection: "row",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",

          borderRadius: 5,
        }}>
          <Icon name={props.name} size={20} color={props.color ?? "white"} />
        </View>
        <SpacerH h={5} />
        <Text style={{ color: props.titleColor ,fontSize : 12 }}>{props.title}</Text>
      </TouchableOpacity>


  );

}
