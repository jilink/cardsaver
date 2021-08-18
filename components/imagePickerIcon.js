import React from 'react'
import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerIcon = () => {
    const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <View>
      {image? <Image source={{uri: image}} style={{height:100}} /> : null}
      {image? <Text>{image} </Text> : null}
        <Icon
          raised
          name="plus-circle"
          type="font-awesome"
          color="green"
          onPress={pickImage}
        />
    </View>
  )
}

export default ImagePickerIcon;