import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  // const HomeScreen = props => { we have destructured this to above so you dont need to put props.navigation.navigate pulling just the navigation property from props object
  return (
    <View>
      <Text style={styles.text}>Hello Mutha Fucka</Text>

      {/* Naviagtion Button */}
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Demo"
      />
      <Button
        title="Go To List Demo"
        onPress={() => navigation.navigate("List")}
      />
      <Button
        title="Go To Image Demo"
        onPress={() => navigation.navigate("Image")}
      />
      <Button
        title="Go To Counter Demo"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go To Color Demo"
        onPress={() => navigation.navigate("Color")}
      />
      <Button
        title="Go To Square Demo"
        onPress={() => navigation.navigate("Square")}
      />
      <Button
        title="Go To Reducer Demo"
        onPress={() => navigation.navigate("Reducer")}
      />
      <Button
        title="Go To Text Input Demo"
        onPress={() => navigation.navigate("Text")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginTop: 20,
    marginVertical: 10,
  },
});

export default HomeScreen;
