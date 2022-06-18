import React, { Props, useRef, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppSizeHelper from "./utils/useScreenHeight";
import { SpacerH } from "./CustomComponent/Spacer";
import PagerView, { PagerViewOnPageSelectedEvent } from "react-native-pager-view";
import Router from "./utils/Router";
import MainPage from "./MainPage";
import SignInScreen from "./auth/SignInScreen";


const titles = [
  "Secure Chat , every message is encrypted using P2P encryption",
  "Explore amazing features , fast chat & video calls , see others stories",
  "Easy experience using tawasool , auto import your contacts and start chat with others",
];
const descriptions = [
  "  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n",
  "s in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.",
  "undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 ",
];
const images = [
  require("../assets/images/onboarding/secure.png"),
  require("../assets/images/onboarding/explore.png"),
  require("../assets/images/onboarding/easy_chat.png"),
];

function OnBoardingScreen({ navigation }: Props) {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const numberOfPages = 2;
  const colors = ["#d7ceff", "#c6e0f6", "#efd9c9"];

  const ref = useRef<PagerView>();
  const onNext = (newIndex: number) => {
    if (newIndex > numberOfPages) {
      toSignInPage();
    } else {
      setSelectedIndex(newIndex);
      ref.current?.setPage(newIndex);
    }
  };
  const toSignInPage = () => {
    new Router().toAndReplace(SignInScreen, {});
  };
  const pages = [0, 1, 2].map((index) => {
    return (
      <View key={index} style={[{ backgroundColor: colors[index] }]}>
        <Page index={selectedIndex} onNext={(newIndex: number) => {
          onNext(newIndex);
        }} onSkip={() => {
          toSignInPage();
        }} />
      </View>
    );
  });
  return (
    <PagerView
      ref={ref}
      onPageSelected={(e: PagerViewOnPageSelectedEvent) => {
        setSelectedIndex(e.nativeEvent.position);
      }}
      style={styles.pagerView} initialPage={0}>
      {pages}
    </PagerView>

  );
};


function Page(props: Props) {
  let selectedIndex = props.index;
  return (
    <ScrollView>
      <OnBoardingPage index={selectedIndex} title={titles[selectedIndex]} description={descriptions[selectedIndex]}
                      image={images[selectedIndex]} onNext={() => {
        let newIndex = selectedIndex + 1;
        props.onNext(newIndex);

      }} onSkip={() => {
        props.onSkip();
      }}></OnBoardingPage>
    </ScrollView>
  );
}

function OnBoardingPage(props: Props) {
  return (
    <View style={styles.featureA}>
      <SpacerH h={50} />
      <Image source={props.image} style={styles.imageStyle} />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>
        {props.description}
      </Text>
      <SpacerH h={80} />

      <View style={styles.endToView}>
        <SpacerH h={50} />
        <StepsIndicator index={props.index} />

        <ControlButtons index={props.index} onNext={() => {
          props.onNext();
        }} onSkip={() => {
          props.onSkip();
        }} />

      </View>

    </View>
  );
};

function ControlButtons(props: Props) {
  let lastIndex = props.index == 2;
  return (
    <View style={styles.controls}>

      <TouchableOpacity style={[{ marginHorizontal: 50 }]} onPress={() => {
        props.onSkip();
      }}>
        <Text style={styles.skipBtn}>Skip</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[{ marginHorizontal: 50 }]} onPress={() => {
        props.onNext();
      }}>
        <View style={styles.nextBackground}>
          <Text style={styles.nextBtn}>{lastIndex ? "Done" : "Next"}</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

function StepsIndicator(props: Props) {

  const currentIndex = props.index;

  return (
    <View style={styles.row}>
      <View style={currentIndex === 0 ? styles.activeIndicator : styles.disabledIndicator}>
      </View>
      <View style={currentIndex === 1 ? styles.activeIndicator : styles.disabledIndicator}>
      </View>
      <View style={currentIndex === 2 ? styles.activeIndicator : styles.disabledIndicator}>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  endToView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    alignContent: "flex-end",
  },
  pagerView: {
    flex: 1,
  },
  featureA: {
    flex: 1,
    height: AppSizeHelper.getScreenHeight(),
    flexDirection: "column",
    alignItems: "center",
  },
  imageStyle: {
    width: AppSizeHelper.getScreenHeight() / 4,
    height: AppSizeHelper.getScreenHeight() / 4,
    resizeMode: "contain",
    margin: 15,
  },
  title: {
    color: "black",
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    margin: 24,
  },
  description: {
    color: "#4d4a5c",
    textAlign: "center",
    fontSize: 15,
    marginHorizontal: 24,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  activeIndicator: {
    width: 50,
    height: 8,
    borderRadius: 20,
    backgroundColor: "#08222e",
    margin: 5,

  },
  disabledIndicator: {
    width: 25,
    height: 8,
    borderRadius: 20,
    backgroundColor: "#707997",
    margin: 5,
  },
  controls: {
    flex: 1,
    flexDirection: "row",
    width: AppSizeHelper.getScreenWidth(),
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,

  },
  skipBtn: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  nextBtn: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 32,
    marginVertical: 16,
  },
  nextBackground: {
    backgroundColor: "white",
    borderRadius: 24,


  },
});

export default OnBoardingScreen;



