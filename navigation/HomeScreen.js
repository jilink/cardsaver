import React from "react";
import { View } from "react-native";
import Header from "../components/header";
import List from "../components/list";
import ImagePickerIcon from "../components/imagePickerIcon";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={{ flex: 2 }}>
        <List />
      </View>
      <View style={{justifyContent: 'center', alignItems:'center', flex: 1 }}>
        <ImagePickerIcon/>
      </View>
    </View>
  );
};

export default HomeScreen;
