import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

// useState is a hook. A hook is a function that adds new functionality to a function component

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  //   call in useState for new piece of data to track, always have to put starting or default value

  // you never modify state variable 'counter' directly

  // if you want to update or modify piece of state you use setCounter
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          //   counter++;
          setCounter(counter + 1);
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          setCounter(counter - 1);
          //   counter--;
        }}
      />
      <Text>Current Count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
