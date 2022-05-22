import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React, { Props, useEffect, useState } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import SplashScreen from "./SplashScreen";
import StatusScreen from "./BottomNavFragment/StatusFragment";
import CallsScreen from "./BottomNavFragment/CallsFragment";
import ChatScreen from "./BottomNavFragment/ChatFragment";
import SettingScreen from "./BottomNavFragment/SettingFragment";
import AppSizeHelper from "./utils/useScreenHeight";
import AppColors from "./utils/AppColors";
import IconButton from "./CustomComponent/IconButton";
import { SpacerH } from "./CustomComponent/Spacer";
import AllMessagesFragment from "./TopTabsFragment/AllMessagesFragment";
import StoriesFragment from "./TopTabsFragment/StoriesFragment";
import PrivateFragment from "./TopTabsFragment/PrivateFragment";
import GroupsFragment from "./TopTabsFragment/GroupsFragment";

function MainPage() {
  const [tapIndex, setTapIndex] = useState(0);
  const fragments = [<AllMessagesFragment />, <StoriesFragment />, <PrivateFragment />,
    <GroupsFragment />];
  return (
    <View style={styles.container}>

      <View style={styles.topView}>
        <View style={styles.topItems}>
          <View style={styles.rowSpaceBetween}>
            <View style={styles.row}>
              <Image source={require("../assets/images/tawasol_logo.png")} style={styles.appLogo} />
              <Text style={styles.whiteText}>Tawasool</Text>
            </View>
            <View style={styles.rowEnd}>
              <IconButton name={"search"} onPress={() => {
              }} size={25} />
              <IconButton name={"notifications-none"} onPress={() => {
              }} size={25} />
              <Image source={{ uri: "https://randomuser.me/api/portraits/thumb/men/75.jpg" }}
                     style={styles.profileImage} />
            </View>
          </View>
          <TopTaps activeIndex={tapIndex} onPress={(index: number) => {
            setTapIndex(index);
          }} />
          <SpacerH h={30} />

        </View>
      </View>

      <View style={styles.userView}>
        <>{fragments[tapIndex]}</>

      </View>


    </View>
  );
}

function TopTaps(props: Props) {
  return <View style={[styles.row, { margin: 10 }]}>
    <TapItem isActive={props.activeIndex === 0} title={"All Messages"} onPress={() => {
      props.onPress(0);
    }} />
    <TapItem isActive={props.activeIndex === 1} title={"Stories"} onPress={() => {
      props.onPress(1);
    }} />
    <TapItem isActive={props.activeIndex === 2} title={"Private"} onPress={() => {
      props.onPress(2);
    }} />
    <TapItem isActive={props.activeIndex === 3} title={"Groups"} onPress={() => {
      props.onPress(3);
    }} />
  </View>;
}

function TapItem(props: Props) {
  let isActive = props.isActive;
  return <TouchableOpacity onPress={props.onPress} style={[{
    backgroundColor: isActive ? "white" : AppColors.primaryColor,
    padding: 10,
    margin: 10,
    borderRadius: 20,
  }]}>
    <Text style={[{
      color: isActive ? AppColors.primaryColor : "white",
      fontWeight: isActive ? "bold" : "normal",
    }]}>{props.title}</Text>
  </TouchableOpacity>;
}


const styles = StyleSheet.create({


  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
  whiteText: {
    color: "white",
  },
  appLogo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
    tintColor: "white",
  },

  container: {
    flex: 1,
    flexDirection: "column",
  },
  topItems: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  rowSpaceBetween: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  row: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
  },
  rowEnd: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  topView: {

    height: AppSizeHelper.getScreenHeight() / 5.5,

    flexDirection: "column",
    backgroundColor: AppColors.primaryColor,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
  },
  userView: {
    flex: 10,
  },

});

export default MainPage;
