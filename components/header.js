import React from 'react'
import { Header as BasicHeader } from "react-native-elements/dist/header/Header";
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
      <BasicHeader backgroundColor='black' centerComponent={{text: 'CARD SAVER', style:{color: 'white', fontSize: 25}}}/>
  )
}
export default Header
