import React from "react";

import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child#1</Text>
      <Text style={styles.textTwoStyle}>Child#2</Text>
      <Text style={styles.textThreeStyle}>Child#3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    height: 200,
    borderWidth: 3,
    borderColor: "black",
  },

  textOneStyle: {
    borderWidth: 3,
    borderColor: "red",

    // Default allignItems:'stretch' take up whole space
    // Always applied to the parent elemnt in this case View
    //  flexDirection default is column
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",

    //  child to fillup parent

    ...StyleSheet.absoluteFillObject,

    // same as writing:
    // position: "absolute",
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    // absolute makes property ignore its siblings and will position over them
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "red",
  },

  // child 1 and 2 have flex 4
  // child 3 has flex 2
  // this splits the space and gives spacing proportionally
  // 4 +4 +2 = 10 therefore child 1,2 get 40% and 3 gets 20% of available space
});

export default BoxScreen;
