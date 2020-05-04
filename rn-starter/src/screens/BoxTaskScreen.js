import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxTaskScreen = () => {
  return (
    <View style={styles.ViewStyle}>
      <View style={styles.ViewStyle1} />
      <View style={styles.ViewStyle2} />
      <View style={styles.ViewStyle3} />
    </View>
  );
};

const styles = StyleSheet.create({
  ViewStyle: {
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  ViewStyle1: {
    height: 50,
    width: 50,
    backgroundColor: "red",
    alignSelf: "flex-end",
  },

  ViewStyle2: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    top: 50,
  },
  ViewStyle3: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});

export default BoxTaskScreen;
