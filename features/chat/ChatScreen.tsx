import React, { Props, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from "react-native";
import IconButton from "../CustomComponent/IconButton";
import AppColors from "../utils/AppColors";
import AppSizeHelper from "../utils/useScreenHeight";
import Router from "../utils/Router";
import CustomInput from "../CustomComponent/CustomInput";
import { useForm } from "react-hook-form";
import { IconButtonWithTitle } from "../CustomComponent/ButtonWithTitle";
import { SpacerW } from "../CustomComponent/Spacer";


export default function ChatScreen() {
  return (
    <ScaffoldApp
      header={
        <AppHeader
          content={
            <View style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
            }}>
              <Image source={{ uri: "https://randomuser.me/api/portraits/thumb/women/21.jpg" }}
                     style={styles.usertImage} />
              <View style={{
                flex: 1,
                flexDirection: "column",
                alignContent: "center",
                margin: 10,

              }}>
                <Text style={styles.mediumWhiteText}>Mohammed Elamin</Text>
                <Text style={styles.smallGreyText}>Last seen 7:30 PM</Text>
              </View>
            </View>
          }
          action={
            <View style={styles.normalRow}>
              <IconButton name={"call"} color={"white"} size={20} onPress={() => {
              }} />
              <IconButton name={"video-call"} color={"white"} size={20} onPress={() => {
              }} />


            </View>
          }

        />
      }
      body={
        <ChatMessages />
      }

      bottom={<ChatCompose />}

    />);

}

function ChatComposeItem() {
  return (
    <View style={{
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
    }}>


    </View>
  );
}

function Message(props: Props) {
  const {
    message,
    mine,
  } = props;
  if (mine) {
    return (
      <View style={{
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems : "center",

        margin: 10,
      }}>
        <View style={{
          backgroundColor: AppColors.primaryColor,
          padding: 10,
          borderRadius: 10,
          maxWidth : 220
        }}>
          <Text style={{color : "white"}}>{message}</Text>
        </View>
        <SpacerW  w={5}/>
        <Image source={{ uri: "https://randomuser.me/api/portraits/thumb/women/21.jpg" }}
               style={styles.usertImage} />
      </View>
    );
  } else {
    return (
      <View style={{
        flexDirection: "row",

        justifyContent: "flex-start",
        alignItems : "center",

        margin: 10,
      }}>
        <Image source={{ uri: "https://randomuser.me/api/portraits/thumb/men/12.jpg" }}
               style={styles.usertImage} />
        <SpacerW  w={5}/>

        <View style={{
          backgroundColor: AppColors.secondaryColor,
          padding: 10,
          borderRadius: 10,
          maxWidth : 220
        }}>
          <Text style={{color : "white",fontWeight : "bold"}}>{message}</Text>

        </View>
      </View>
    );
  }

}

function ChatMessages() {
  const message = [
    {
      message: "Hi there",
      "mine": false,
    },
    {
      message: "Hi wassup hope ur doing well!",
      "mine": true,
    },
    {
      message: "Wanna ask you are you coming to office today??",
      "mine": true,
    },
    {
      message: "No today i want to WFH!! :D",
      "mine": false,
    },
    {
      message: "If you want to discuss smthing just call me :)",
      "mine": false,
    },
    {
      message: "No haha , i have a quick question how to deploy the app to google play using pipeline ??",
      "mine": true,
    },
    {
      message: "Recently I looked into CI/CD for Android using Github Actions. And thanks to open source contributions to Github Actions marketplace, it ended up being easier than I thought it would be.\n" +
        "\n" +
        "In particular, I am using these two Actions (both created by Drew Heavner). Thanks Drew!\n" +
        "\n" +
        "sign-android-release Github Action\n" +
        "\n" +
        "upload-google-play Github Action\n" +
        "\n" +
        "For a small project of mine I ended up with two YAML files:\n" +
        "\n" +
        "build.yml\n" +
        "\n" +
        "deploy.yml",
      "mine": false,
    },
  ];
  return <View>
    <FlatList
      data={message}
      renderItem={(item) => <Message message={item.item.message}  mine={item.item.mine} />}
    />
  </View>;
}

function ChatCompose() {
  const { control, handleSubmit, setValue } = useForm();
  const [isComposeModelOpen, setComposeModelOpen] = useState(false);

  return <View style={{
    flexDirection: "column",
    backgroundColor: AppColors.primaryColor,

  }}>
    <View style={{
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10,
    }}>
      <View style={{
        backgroundColor: AppColors.secondaryColor,
        borderRadius: 20,
      }}>
        <IconButton size={20} name={isComposeModelOpen ? "close" : "add"} color={"white"} onPress={() => {
          setComposeModelOpen(!isComposeModelOpen);
        }} />
      </View>
      <View style={{ flex: 1 }}>
        <CustomInput
          control={control}
          name={"message"}
          placeHolder={"Type a message"}
          showKeyboard={false}

        />
      </View>
      <IconButton size={20} name={"send"} color={"white"} onPress={() => {
      }} />
    </View>
    {isComposeModelOpen && <View style={{
      backgroundColor: "white",
      flexDirection: "row",
      justifyContent: "space-between",
    }}>
      <IconButtonWithTitle
        title={"Media"}
        name={"perm-media"} onPress={() => {
      }} titleColor={AppColors.primaryColor} size={20} />
      <IconButtonWithTitle
        title={"Attach"}
        name={"attach-file"} onPress={() => {
      }} titleColor={AppColors.primaryColor} size={20} />
      <IconButtonWithTitle
        title={"gif"}
        name={"gif"} onPress={() => {
      }} titleColor={AppColors.primaryColor} size={20} />
      <IconButtonWithTitle
        title={"Location"}
        name={"location-on"} onPress={() => {
      }} titleColor={AppColors.primaryColor} size={20} />

    </View>}

  </View>;
}


function ScaffoldApp(props: Props) {
  const {
    header,
    body,
    bottom,
  } = props;
  return (
    <View style={{
      flex: 1,
      flexDirection: "column",

    }}>

      <View style={{
        backgroundColor: "red",

        width: AppSizeHelper.getScreenWidth(),


      }}>
        {header}

      </View>
      <View style={{
        flex: 1,

      }}>
        {body}

      </View>
      <View style={{}}>
        {bottom}

      </View>

    </View>
  );
}


function AppHeader(props: Props) {

  const {
    showTitle = true,
    title = "",
    titleStyle = {},
    content,
    action,
  } = props;
  return (
    <View style={{
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",

      backgroundColor: AppColors.primaryColor,
      height: 60,
    }}>

      <View style={{}}>
        <TouchableOpacity>
          <IconButton margin={10} name={"arrow-back-ios"} color={"white"} size={25} onPress={() => {
            new Router().back();

          }} />
        </TouchableOpacity>
      </View>
      <View style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
      }}>
        {content}
      </View>
      <View style={{}}>
        {action}

      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  usertImage: {
    width: 30,
    height: 30,
    borderRadius: 30,
    resizeMode: "contain",
  },
  mediumWhiteText: {
    color: "white",
    fontSize: 12,
  },
  smallGreyText: {
    color: AppColors.secondaryColor,
    fontSize: 10,
  },
  normalRow: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
