import React, { Props, useCallback, useEffect } from "react";
import {
  Alert,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SpacerH } from "../CustomComponent/Spacer";

import BouncyCheckbox from "react-native-bouncy-checkbox";
import AppSizeHelper from "../utils/useScreenHeight";
import CustomBtn from "../CustomComponent/CustomBtn";
import { useForm } from "react-hook-form";
import CustomInput from "../CustomComponent/CustomInput";
import Router from "../utils/Router";
import VerificationScreen from "./VerificationScreen";

function SignInScreen(props: Props) {
  const { control, handleSubmit, setValue } = useForm();
  const onSubmit = (data) => {
    new Router(props.navigation).toAndReplace(VerificationScreen, { phone: data["phone"] });
  };


  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.smallText}>Welcome</Text>
          <SpacerH h={20} />
          <Image style={styles.logo} source={require("./../../assets/images/tawasol_logo.png")} />


        </View>

      </View>
      <View style={styles.bottom}>
        <SpacerH h={20} />

        <View style={styles.bottomContent}>
          <ScrollView>
            <View style={styles.termsAndCondContainer}>
              <Text style={[{ fontSize: 18, fontWeight: "bold", color: "#1e2235", textAlign: "center", flex: 6 }]}>What,s
                your
                number?</Text>
              <Text style={[{ textAlign: "center", marginVertical: 16, flex: 6 }]}>We`ll text a code to verify your
                phone SMS
                changes may apply.</Text>

            </View>

            <CustomInput
              control={control}
              name={"phone"}
            />
            <View style={[{ flex: 1, flexDirection: "column", alignItems: "stretch", marginHorizontal: 10 }]}>
              <View style={[{ flexDirection: "row", marginHorizontal: 10 }]}>
                <BouncyCheckbox style={[{ borderRadius: 5 }]} size={18} fillColor={"#0a1089"}
                                onPress={(isChecked: boolean) => {
                                }} />
                <Text style={styles.termAndCondTextStyle}>I agree to the Terms and Privacy Policy.</Text>
              </View>
              <SpacerH h={15} />


              <CustomBtn
                title={"VERIFY"}
                onPress={handleSubmit(onSubmit)
                }
              />


            </View>

          </ScrollView>


        </View>


      </View>
    </View>
  );


}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0a1089",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    flex: 5,
    backgroundColor: "#0a1089",
  },
  headerContent: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: {
    flex: 12,
    marginHorizontal: 10,
    backgroundColor: "white",
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
  },
  bottomContent: {
    flex: 12,
    flexDirection: "column",
    justifyContent: "flex-start",

    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    tintColor: "white",


  },
  smallText: {
    fontSize: 15,
    color: "white",
  },
  bigText: {
    fontSize: 18,
  },
  termsAndCondContainer: {
    flexDirection: "column", alignItems: "center", marginHorizontal: 50,
  },
  termAndCondTextStyle: {
    color: "#b7b8c7", fontSize: 12,
  },
  termAndCondCheckBoxStyle : {
    borderRadius: 5
  }


});
export default SignInScreen;
