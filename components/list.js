import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import ListItem from 'react-native-elements/dist/list/ListItem'

const List = ({items = ["mark", "jean", "serge"]}) => {
  return (
    <ScrollView>
      {items.map((item) => <Item key={item} text={item}/>)}
    
    </ScrollView>
  )
}

const Item = ({text}) => {

  const _onPressItem = () => {
    {/*gérer la navigation entre activty https://reactnative.dev/docs/navigation*/}
  }

  return (
    <ListItem bottomDivider onPress={_onPressItem}>
      <ListItem.Content>
      <ListItem.Title>{text}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}


export default List
