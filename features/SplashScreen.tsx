import React, { Props, useEffect } from "react";
import { Animated, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import AppSizeHelper from "./utils/useScreenHeight";
import Timer from "./utils/timer";
import MainPage from "./MainPage";
import { StackActions } from "@react-navigation/native";
import Router from "./utils/Router";
import OnBoardingScreen from "./OnboardingScreen";


const logo = require("../assets/images/tawasol_logo.png");

function SplashScreen({ route, navigation }: Props ) {
  useEffect(() => {
    new Timer(2, (message: string) => {
      new Router().toAndReplace(OnBoardingScreen, {});
    });
  });
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={logo} />
      <Text style={styles.appName}>Tawasool Chat</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
    flex: 1,
    height: AppSizeHelper.getScreenHeight(),
    flexDirection: "column",

  },
  logo: {
    width: AppSizeHelper.getScreenHeight() / 5,
    height: AppSizeHelper.getScreenHeight() / 5,
  },
  appName: {
    color: "gray",
    fontSize: 17,
  },
});


export default SplashScreen;
