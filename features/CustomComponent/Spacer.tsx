import React from "react";

import { View } from "react-native";
import { Props } from "react";


export function SpacerW(props: Props) {
  return (
    <View style={[{ width: props.w }]}>

    </View>
  );
}

export function SpacerH(props: Props) {
  return (
    <View style={[{ height : props.h }]}>

    </View>
  );
}
//height
