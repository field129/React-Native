// use reducer for multiple different properties that you want to keep track of

import React, { useReducer } from "react";
// rather than useState useReducer (hook function- adds in additional functionality/ capability to functional component  )
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from "../compenents/ColorCounter";

const COLOR_INCREMENT = 15;

// state ==={red:number, green:number, blue:number};
// action ==={type: 'change_red'||'change_green'||'change_blue', payload: 15 || -15}

const reducer = (state, action) => {
  switch (action.type) {
    case "change_red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "change_green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "change_blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};
//  then going to override the existing red property  and the new value for red will be state+red +action.amount
// this code doens't change the state object, instead it is copy and pasting all the values out of it, adding them to new object therfore changing the new object
//  when you redefine a new property later on inside of an object it overrides the existing one

// define reducer function outside of component

const ReducerScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  //    [variable called state, dispatch runs the reducer] =call useReducer (reducer function, {initial value for state object-object with all states in- this has red,green,blue properties staring off at 0})
  // state variable initialy exactly equal to the object, state variable is how we access different state values.
  // red,green,blue all combined into state
  // console.log(state) = {red:0,green:0,blue:0}

  // Applying State with Reducer
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green}, ${state.blue})`,
        }}
      />
      {/* 2 sets of {}. The outer set means you are going to reference a JS experession, the inner set is creating an objecyt literal  */}
    </View>
  );
};

const styles = StyleSheet.create({});
export default ReducerScreen;
