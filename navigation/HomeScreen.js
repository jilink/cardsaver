import React, { useState } from "react";
import { View } from "react-native";
import Header from "../components/header";
import List from "../components/list";
import ImagePickerIcon from "../components/imagePickerIcon";
import { Image } from "react-native-elements/dist/image/Image";
import CardImage from "../components/cardImage";

const HomeScreen = () => {

  const [image, setImage] = useState('')

  return (
    <View style={{ flex: 1 }}>
      <CardImage image={image} setImage={setImage}/>
      <Header />
      <View style={{ flex: 2 }}>
        <List setImage={setImage} />
      </View>
      <View style={{justifyContent: 'center', alignItems:'center', flex: 1 }}>
        <ImagePickerIcon/>
      </View>
    </View>
  );
};

export default HomeScreen;
