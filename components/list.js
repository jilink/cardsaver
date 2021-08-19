import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
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

  const removeItem = async (index) => {
    //Remove specific value by index
    const tmpItems = [...items];
    tmpItems.splice(index, 1)
    try {
      await AsyncStorage.setItem("@codes", JSON.stringify(tmpItems));
      setItems(tmpItems)
    } catch (e) {
      // saving error
    }
  };

  useEffect(() => {
    (async () => {
      //refactor all this with icon codes on redux or something
      let codes = await getCodes();
      codes = codes.length ? JSON.parse(codes) : [];
      setItems(codes);
    })();
  }, []);

  return (
    <ScrollView>
      {items.map((item, index) => (
        <Item
          key={index}
          index={index}
          name={item.name}
          icon={item.icon}
          removeItem={removeItem}
        />
      ))}
    </ScrollView>
  );
};

const Item = ({ index, name, icon = "qrcode", removeItem }) => {
  const _onPressItem = () => {
    {
      /*gérer la navigation entre activty https://reactnative.dev/docs/navigation*/
    }
  };

  return (
    <ListItem.Swipeable
      bottomDivider
      onPress={_onPressItem}
      rightContent={
        <Button
          title="Delete"
          icon={{ name: "delete", color: "white" }}
          buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
          onPress={() => removeItem(index)}
        />
      }
    >
      <Icon name={icon} type="font-awesome" />
      <ListItem.Content>
        <ListItem.Title>{name}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
};

export default List;
