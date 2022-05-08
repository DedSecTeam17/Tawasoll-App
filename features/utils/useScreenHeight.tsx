import React from "react";
import { Dimensions } from "react-native";

const { height ,width} = Dimensions.get("window");

export default class AppSizeHelper {

  static getScreenHeight() {
    return height;
  }

  static getScreenWidth() {
    return width;
  }
}

