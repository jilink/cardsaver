import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./navigation/HomeScreen";
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
