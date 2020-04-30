// REUSABLE STATE UPDATES

import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from "../compenents/ColorCounter";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color ==red green blue
    // change = +15, -15

    // setting min and max limits
    switch (color) {
      case "red":
        if (red + change > 255 || red + change < 0) {
          return;
        } else {
          setRed(red + change);
        }
        return;
      case "green":
        if (green + change > 255 || green + change < 0) {
          return;
        } else {
          setGreen(green + change);
        }
        return;
    }
    // This has been written as a ternary operator- a way of writing if else on one line
    switch (color) {
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
      //
      default:
        return;
    }
  };
  // blue has refactord the nested if or else argument in a shorter way
  //  || means 'or'. ? means that this is what we want to run if this is true  null means don't do anything,
  //   : if this is false

  console.log(red);
  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green}, ${blue})`,
        }}
      />
      {/* 2 sets of {}. The outer set means you are going to reference a JS experession, the inner set is creating an objecyt literal  */}
    </View>
  );
};

const styles = StyleSheet.create({});
export default SquareScreen;

// Generally state variables are created in the most parent compnent that needs to read or change a state value

// If a child needs to read a state value, the parent can pass it down as a prop

//  Reducer

//  Is a function that manages changes to an object
// so far the app works fine, we have 3 speprate pieces of state:
// const red, const, green, const blue

// For this app these three pieces of state are extremely related
// There is a precise set of well-known ways in which we update these values- increase/decrease each
// This makes our state a great candidate for being managed by a 'reducer

//  it is a function that gets called with two seperate objects
// argument 1 - onject that has all of our states in it (red:0,green:0,blue:0)
// argument 2- object that describes the update we want to make (colorToChange: 'red', amount:15 )
// Two technicalities 1 we never change argument 1 directly
//                    2 we must ALWAYS return a value to be used as argument 1
