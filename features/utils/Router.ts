import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { StackActions } from "@react-navigation/native";


export default class Router {
  private navigation: NativeStackNavigationHelpers;

  constructor(navigation: NativeStackNavigationHelpers) {
    this.navigation = navigation;
  }

  to(screenName: React.FC, data: any) {
    this.navigation.navigate(screenName.name, data);
  }

  toAndReplace(screenName: React.FC, data: any) {
    this.navigation.navigate(screenName.name, data);

    this.navigation.dispatch(
      StackActions.replace(screenName.name, data),
    );

  }
}
