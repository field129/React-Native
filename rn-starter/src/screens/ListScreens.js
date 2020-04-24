import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 20 },
    { name: "Friend #2", age: 21 },
    { name: "Friend #3", age: 26 },
    { name: "Friend #4", age: 29 },
    { name: "Friend #5", age: 28 },
    { name: "Friend #6", age: 25 },
    { name: "Friend #7", age: 230 },
    { name: "Friend #8", age: 420 },
    { name: "Friend #9", age: 40 },
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
        return (
          <Text style={styles.textStyle}>
            {item.name}- Age {item.age}
          </Text>
        );
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
