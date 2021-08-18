import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements';
import ListItem from 'react-native-elements/dist/list/ListItem'

const List = ({items = [{name: "mark", icon: 'qrcode'}, {name:"jean", icon: 'barcode'}, {name: "serge"}]}) => {
  return (
    <ScrollView>
      {items.map((item) => <Item key={item.name} name={item.name} icon={item.icon}/>)}
    
    </ScrollView>
  )
}

const Item = ({name, icon='qrcode'}) => {

  const _onPressItem = () => {
    {/*gérer la navigation entre activty https://reactnative.dev/docs/navigation*/}
  }

  return (
    <ListItem bottomDivider onPress={_onPressItem}>
      <Icon name={icon} type="font-awesome"/>
      <ListItem.Content>
      <ListItem.Title>{name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}


export default List
