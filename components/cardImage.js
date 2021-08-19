import React, { useEffect, useState } from "react";
import { Image } from "react-native-elements/dist/image/Image";
import { Modal, StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { Dimensions } from "react-native";

const CardImage = ({ image = "", setImage }) => {
  const dimensions = Dimensions.get('window');

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!image}
      onRequestClose={() => {
        setImage('')
      }}
    >
      <View>
        <View style={{alignItems: 'center'}}>
          {image ? <Image source={{ uri: image }} style={{flex:1, width: dimensions.width}} /> : null}
        </View>
      </View>
    </Modal>
  );
};

export default CardImage;
