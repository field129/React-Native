import React, { useReducer } from "react";
// import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

// useState is a hook. A hook is a function that adds new functionality to a function component

const reducer = (state, action) => {
  // state==={count: number}
  // action === {type: 'increase'|| 'decrease', payload: 1}

  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  //   const [counter, setCounter] = useState(0);
  //   call in useState for new piece of data to track, always have to put starting or default value

  // you never modify state variable 'counter' directly

  // if you want to update or modify piece of state you use setCounter
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "increase", payload: 1 });
          // only way to update that variable is by calling the set function
          //   setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrease", payload: 1 });
          //   setCounter(counter - 1);
        }}
      />
      {/* <Text>Current Count:{counter}</Text> */}
      <Text>Current Count:{state.count}</Text>
    </View>
  );
};
// using function-based state in functional component, React also use class-based compoments that have acess to state
// NEVER directly modify a state variable. React doesn't detect this change onlu use the 'setter' function
// we can name the state variable anything we wish
// we can track any kind of data that changes over time-a number, string, array of objects, etc
// When a component is rerendered all of its children are too
// A stste variable can be passed to a child component! At that point, the state variable is no beuing used as props

const styles = StyleSheet.create({});

export default CounterScreen;
