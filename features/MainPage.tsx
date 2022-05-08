import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View } from "react-native";

import React, { Props, useEffect } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SplashScreen from "./SplashScreen";
import StatusScreen from "./BottomNavFragment/StatusFragment";
import CallsScreen from "./BottomNavFragment/CallsFragment";
import ChatScreen from "./BottomNavFragment/ChatFragment";
import SettingScreen from "./BottomNavFragment/SettingFragment";
import AppSizeHelper from "./utils/useScreenHeight";

function MainPage() {
  return (
    <SafeAreaView>

      <View style={styles.container}>

        <View style={styles.fragmentView}>
        <ScrollView>
          <View style={styles.box}>

          </View>
          <View style={styles.box}>

          </View>
          <View style={styles.box}>

          </View>
          <View style={styles.box}>

          </View>
          <View style={styles.box}>

          </View>
          <View style={styles.box}>

          </View>
          <View style={styles.box}>

          </View>
          <View style={styles.box}>

          </View>
          <View style={styles.box}>

          </View>
        </ScrollView>
        </View>
        <View style={styles.bottomNav}>


        </View>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fragmentView: {
    // flex: 1,
    // flexDirection : 'column',
    // alignItems : "center",
    height : AppSizeHelper.getScreenHeight() - 60,
    width : AppSizeHelper.getScreenWidth()
  },
  container: {
    // flex: 1,
    // flexDirection: "column",

    height : AppSizeHelper.getScreenHeight(),
    width : AppSizeHelper.getScreenWidth()
  },
  bottomNav: {
    position: "absolute",
    top: AppSizeHelper.getScreenHeight() - 60,
    backgroundColor: "gray",
    height: 60,
    width: AppSizeHelper.getScreenWidth(),
  },
  box : {
    backgroundColor: "red",
    height: 60,
    width: AppSizeHelper.getScreenWidth()/1.1,
    marginVertical : 20

  }
});

export default MainPage;
