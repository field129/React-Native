import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  console.log(colors);

  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
          //  [] creates brand new array
          // ...colors means take a copy of everything inside the 'colors' array and add to this new one.
          // This means that we call Setcolors, with a brand new array that has everything from the original 'colors' array and our brand new one'randomRgb'.
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

// Random number function Math.floor(Math.random() * X)

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
  //  Template string
  //  Template strings or literals are enclosed by the backtick (` `)  (grave accent) character instead of double or single quotes.
  //  Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the backticks (` `) get passed to a function.
};

const styles = StyleSheet.create({});

export default ColorScreen;
