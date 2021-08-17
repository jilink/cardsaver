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
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
      <ListItem.Title>{text}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
}


export default List
