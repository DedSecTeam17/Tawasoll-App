import { TextInput, View } from "react-native";
import React, { Props } from "react";
import { useController } from "react-hook-form";


export default function CustomInput(props: Props) {
  const { field } = useController({
    control: props.control,
    defaultValue: "",
    name: props.name,
  });
  return (
    <View style={[{
      backgroundColor: "#eef0ff",
      alignSelf: "stretch",
      borderRadius: 10,
      margin: 15,
      paddingHorizontal: 10,
    }]}>
      <TextInput
        value={field.value}
        onChangeText={field.onChange}
        keyboardType={"number-pad"}
        placeholder={"+971-525221632"}
      />
    </View>
  );
}
