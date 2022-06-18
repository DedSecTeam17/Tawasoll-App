import { NativeStackNavigationHelpers } from "@react-navigation/native-stack/lib/typescript/src/types";
import React from "react";
import { StackActions } from "@react-navigation/native";


import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export default class Router {



  back(){
   if ( navigationRef.canGoBack()){
     navigationRef.goBack()
   }
  }
  to(screenName: React.FC, data: any) {
    if (navigationRef.isReady()) {
      navigationRef.navigate(screenName.name, data);

    }
  }

  toAndReplace(screenName: React.FC, data: any) {
    navigationRef.dispatch(
      StackActions.replace(screenName.name, data),
    );

  }

  toAndClearStack(screenName: React.FC, data: any) {
    navigationRef.reset(
      {
        index: 0,
        routes: [{ name: screenName.name }],
      },
    );

  }


}
