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


type RootStackParamList = {
  MainPage: { userId: string };
  SplashScreen: undefined,
  OnBoardingScreen: undefined,
  SignInScreen: undefined,
  VerificationScreen: {
    phone: string
  }
};
const RootStack = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={"SplashScreen"}>
        <RootStack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="OnBoardingScreen" component={OnBoardingScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="SignInScreen" component={SignInScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="MainPage" component={MainPage} options={{ headerShown: false }} />
        <RootStack.Screen name="VerificationScreen" component={VerificationScreen}
                          options={{
                            headerShown: true, title: "Verify Phone",
                            headerShadowVisible: false,
                            headerTitleAlign: "center",
                            headerStyle: {
                              backgroundColor: "white",
                            },
                          }} />


      </RootStack.Navigator>
    </NavigationContainer>
  );
};


export default App;
