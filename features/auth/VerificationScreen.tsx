import React, { Props, useState } from "react";
import { Screen } from "react-native-screens";
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SpacerH } from "../CustomComponent/Spacer";
import { CodeField, Cursor, useBlurOnFulfill } from "react-native-confirmation-code-field";
import CustomBtn from "../CustomComponent/CustomBtn";

const CELL_COUNT = 4;
export default function VerificationScreen(props: Props) {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });

  return (
    <ScrollView style={[{ backgroundColor: "white" }]}>

      <View style={styles.container}>
        <SpacerH h={20} />
        <Text style={[{ fontSize: 18 }]}>Code is sent to 0525251632</Text>
        <SpacerH h={40} />

        <CodeField
          ref={ref}
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, symbol, isFocused }) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
            >
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <SpacerH h={40} />
        <View style={[{flex : 1,flexDirection : "row"}]}>
          <Text style={[{ fontSize: 14 }]}>Did`t receive code?</Text>
         <TouchableOpacity>
           <Text style={[{ fontSize: 14 ,color : "black" , fontWeight : "bold"}]}> Request again</Text>
         </TouchableOpacity>
        </View>
        <SpacerH h={10} />
        <TouchableOpacity>
          <Text style={[{ fontSize: 14 ,color : "black" , fontWeight : "bold"}]}>Get via Call</Text>
        </TouchableOpacity>
        <SpacerH h={10} />
        <CustomBtn onPress={()=>{}} margin={40} title={"Verify and Create Account"} />

      </View>

    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",

  },
  codeFieldRoot: { marginTop: 20 },
  cell: {
    width: 50,
    height: 50,
    backgroundColor : "#f6f5fa",
    margin : 10,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 1,
    borderRadius : 10,
    borderColor: "#00000030",
    textAlign: "center",
    shadowColor: '#000',

    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,

    elevation: 8,
  },
  focusCell: {
    borderColor: "#000",
  },
});
