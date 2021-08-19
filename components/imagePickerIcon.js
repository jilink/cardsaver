import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import { Platform } from "react-native";
import { Modal } from "react-native";
import { Pressable } from "react-native";
import { Input } from "react-native-elements/dist/input/Input";
import RadioGroup from "react-native-radio-buttons-group";
import AsyncStorage from "@react-native-async-storage/async-storage";

const radioButtonsData = [
  {
    id: "1",
    label: "QR code",
    value: "qrcode",
  },
  {
    id: "2",
    label: "Barcode",
    value: "barcode",
  },
];

const ImagePickerIcon = () => {
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const [radioButtons, setRadioButtons] = useState(radioButtonsData);

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });


    if (!result.cancelled) {
      setImage(result.uri);
      setModalVisible(true);
    }
  };

  const onPressRadioButton = (radioButtonsArray) => {
    setRadioButtons(radioButtonsArray);
  };

  const getCodes = async () => {
    try {
      const value = (await AsyncStorage.getItem("@codes")) || [];
      return value;
    } catch (e) {
      console.log("error", e);
      return [];
    }
  };

  const onSubmit = async () => {
    const selected = radioButtons.filter((item) => item.selected);
    const icon = selected[0]?.value || "qrcode";

    const codes = await getCodes();
    parsedCodes = codes.length ? JSON.parse(codes) : [];
    parsedCodes.push({ name, image, icon });
    try {
      await AsyncStorage.setItem("@codes", JSON.stringify(parsedCodes));
      setModalVisible(false);
    } catch (e) {
      // saving error
    }
  };
  return (
    <View>
      {image ? <Image source={{ uri: image }} style={{ height: 100 }} /> : null}
      {image ? <Text>{image} </Text> : null}
      <Icon
        raised
        name="plus-circle"
        type="font-awesome"
        color="green"
        onPress={pickImage}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Almost done!</Text>
            <Input
              placeholder="Code name"
              onChangeText={(value) => setName(value)}
            />
            <RadioGroup
              radioButtons={radioButtons}
              onPress={onPressRadioButton}
              layout="row"
            />
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonOk]}
                onPress={onSubmit}
              >
                <Text style={styles.textStyle}>Ok!</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 3,
    justifyContent: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "red",
  },
  buttonOk: {
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ImagePickerIcon;
