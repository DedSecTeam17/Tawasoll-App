import React, { Props, useEffect } from "react";
import { FlatList, Image, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppColors from "../utils/AppColors";
import { SpacerH, SpacerW } from "../CustomComponent/Spacer";


class User {
  private _lastMessage: string;
  private _imageUrl: string;
  private _lastSeen: string;
  private _name: string;

  constructor(name: string, imageUrl: string, lastSeen: string, lastMessage: string) {
    this._lastMessage = lastMessage;
    this._imageUrl = imageUrl;
    this._lastSeen = lastSeen;
    this._name = name;
  }


  get lastMessage(): string {
    return this._lastMessage;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get lastSeen(): string {
    return this._lastSeen;
  }

  get name(): string {
    return this._name;
  }
}

export default function AllMessagesFragment() {

  let users: Array<User> = [
    new User("Rebeka Ratry", "https://randomuser.me/api/portraits/thumb/women/21.jpg", "10 min ago", "Thank you"),
    new User("Mohamed Elamin", "https://randomuser.me/api/portraits/thumb/men/22.jpg", "just now", "content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a m"),
    new User("Khalid Ali", "https://randomuser.me/api/portraits/thumb/women/33.jpg", "1 day ago", "h don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generat"),
    new User("Omer Khalid", "https://randomuser.me/api/portraits/thumb/men/44.jpg", "5 min ago", "ydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 "),
    new User("Shazza :D", "https://randomuser.me/api/portraits/thumb/women/44.jpg", "12-3-22", "ions 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accomp"),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/men/56.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/women/11.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/men/1.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/women/22.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/men/14.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/women/65.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/men/23.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/women/67.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/men/34.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/men/2.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/men/11.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/women/23.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/men/99.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/women/88.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),
    new User("Bro <3", "https://randomuser.me/api/portraits/thumb/men/77.jpg", "10-2-21", "dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to "),

  ];

  useEffect(() => {
    console.log("RENDERING .....");
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        renderItem={(item: ListRenderItemInfo<User>) => <UserItem user={item.item} index={item.index} />}
      />
    </View>
  );
}


function MessagesIndicator() {
  return <View
    style={[{ backgroundColor: AppColors.primaryColor, width: 25, height: 25, borderRadius: 25, padding: 5 }]}>
    <Text style={[{ color: "white", textAlign: "center", fontSize: 10 }]}>3</Text>
  </View>;
}

function Status(props : Props) {
  return <View
    style={[{
      backgroundColor: props.online ? "green" : "gray",
      width: 10,
      height: 10,
      borderRadius: 10,
      padding: 5,
      marginTop: 10,
      position: "absolute",
      top: 30,
      left: 35,
      borderColor: "white",
      borderStyle: "solid",
      borderWidth: 2,
    }]}>

  </View>;
}


function UserItem(props: Props) {
  let user: User = props.user;
  return <TouchableOpacity style={styles.rowSpaceBeteen}>
    <View style={styles.row}>
      <View style={styles.absolView}>

        <Image source={{ uri: user.imageUrl }} style={styles.usertImage} />
        <Status online={props.index%2=== 0} />
      </View>
      <View style={styles.columnFlexStart}>
        <Text style={styles.nameTextStyle}>{user.name}</Text>
        <Text
          style={styles.lastMessageStyle}>{user.lastMessage.length > 10 ? user.lastMessage.substring(0, 10) + "..." : user.lastMessage}</Text>

      </View>
    </View>

    <View style={styles.rowStartAtEnd}>
      {props.index === 0 && <MessagesIndicator />}
      <SpacerW w={10} />

      <Text style={styles.lastSeenStyle}>{user.lastSeen}</Text>

    </View>
  </TouchableOpacity>;
}

const styles = StyleSheet.create({
  container: {
    flex: 12,
    paddingTop: 22,
  },
  row: {
    flex: 1,
    flexDirection: "row",
  },
  columnFlexStart: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    margin: 5,
  },
  rowSpaceBeteen: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 16,
  },
  rowStartAtEnd: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  usertImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
    resizeMode: "contain",
    position: "absolute",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  nameTextStyle: {
    color: "#273844",
    fontWeight: "bold",
  },
  lastMessageStyle: {
    color: "#687279",
  },
  lastSeenStyle: {
    color: "#404a50",
    fontWeight: "bold",
  },
  absolView: {
    position: "relative",
    width: 60,
    height: 60,

  },
});
