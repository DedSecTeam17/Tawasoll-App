/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import SplashScreen from "./features/SplashScreen";

import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MainPage from "./features/MainPage";
import OnBoardingScreen from "./features/OnboardingScreen";
import SignInScreen from "./features/auth/SignInScreen";
import VerificationScreen from "./features/auth/VerificationScreen";
import AppColors from "./features/utils/AppColors";
import ChatScreen from "./features/chat/ChatScreen";
import { navigationRef } from "./features/utils/Router";
import { Text } from "react-native";


type RootStackParamList = {
  MainPage: { userId: string };
  SplashScreen: undefined,
  OnBoardingScreen: undefined,
  SignInScreen: undefined,
  VerificationScreen: {
    phone: string
  },
  ChatScreen: undefined
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator initialRouteName={"SplashScreen"}
      >
        <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="MainPage" component={MainPage} options={{
          headerShown: true,
          headerShadowVisible: false,
          title: "",
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: AppColors.primaryColor,
          },
        }} />
        <RootStack.Screen name="VerificationScreen" component={VerificationScreen}
                          options={{
                            headerShown: true, title: "Verify Phone",
                            headerShadowVisible: false,
                            headerTitleAlign: "center",
                            headerStyle: {
                              backgroundColor: "white",
                            },
                          }} />


        <RootStack.Screen name={"ChatScreen"} component={ChatScreen}
                          options={{
                            headerShown: false,


                          }}
        />


      </RootStack.Navigator>
    </NavigationContainer>
  );
};


export default App;
