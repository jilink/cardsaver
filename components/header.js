import React from 'react'
import { Header as BasicHeader } from "react-native-elements/dist/header/Header";
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
      <BasicHeader backgroundColor='black' centerComponent={{text: 'CARD SAVER', style:{color: 'white', fontSize: 25}}}/>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    flex: 1,
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
});
export default Header
