import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

const ComponentsScreen = () => {
  const name = "TOM FIELD";

  return (
    <View style={styles.container}>
      {/*props - configuration options for JSX elements  */}
      <Text style={styles.textStyle}>Getting started with React Native! </Text>

      {/* refer to JS variable inside of JSX block using curly braces */}
      <Text style={styles.subHeaderStyle}>My Name Is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
    fontWeight: "bold",
    paddingBottom: 20,
    color: "blue",
    display: "flex",
  },
  subHeaderStyle: {
    fontSize: 20,
  },
  container: {
    height: 150,
    width: 500,
    backgroundColor: "red",
  },
});

export default ComponentsScreen;
