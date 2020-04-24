import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1" },
    { name: "Friend #2" },
    { name: "Friend #3" },
    { name: "Friend #4" },
    { name: "Friend #5" },
    { name: "Friend #6" },
    { name: "Friend #7" },
    { name: "Friend #8" },
    { name: "Friend #9" },
  ];

  // Keys are needed for updating lists and must be uniqe. Key must be in form of a string
  // use keyExtractor

  return (
    <FlatList
      horizontal
      // displays horizontally lists are vertical by default.
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      // render item called with each individl element
      renderItem={({ item }) => {
        //to call item from element ({})
        return <Text style={styles.textStyle}>{item.name}</Text>;
        // element === {item:{name :'friend:#1}, index: 0}
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 30,
  },
});

export default ListScreen;

//  firstly you create the styling element in style sheet.
// Then you have to ' wire it up' so that you implement it
