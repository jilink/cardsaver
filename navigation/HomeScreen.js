import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import Header from "../components/header";
import List from "../components/list";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 2 }}>
        <List />
      </View>
      <View style={{justifyContent: 'center', alignItems:'center', flex: 1 }}>
        <Icon
          raised
          name="plus-circle"
          type="font-awesome"
          color="green"
          onPress={() => console.log("hello")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;
