import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements';
import ListItem from 'react-native-elements/dist/list/ListItem'

const List = () => {
  const [items, setItems] = useState([]);

  const getCodes = async () => {
    try {
      const value = (await AsyncStorage.getItem("@codes")) || [];
      return value;
    } catch (e) {
      console.log("error", e);
      return [];
    }
  };

  useEffect(() => {
    (async () => {
      //refactor all this with icon codes on redux or something
      let  codes = await getCodes();
      codes = codes.length ? JSON.parse(codes) : [];
      setItems(codes);
    })();
  }, []);

  return (
    <ScrollView>
      {items.map((item, index) => (
        <Item key={index} name={item.name} icon={item.icon} />
      ))}
    </ScrollView>
  );
};

const Item = ({ name, icon = "qrcode" }) => {
  const _onPressItem = () => {
    {
      /*gérer la navigation entre activty https://reactnative.dev/docs/navigation*/
    }
  };

  return (
    <ListItem bottomDivider onPress={_onPressItem}>
      <Icon name={icon} type="font-awesome" />
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default List;
