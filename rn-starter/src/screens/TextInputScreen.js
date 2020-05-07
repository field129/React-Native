import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextInputScreen = () => {
  const [password, setPassword] = useState("");
  // usestate is a way of accessing information in a child from a parent
  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={"false"}
        value={password}
        onChangeText={(newValue) => setPassword(newValue)}
        // callback function newvalue
      />
      {/* <Text>My password is {password}</Text> */}

      {password.length < 4 ? (
        <Text>Password must be at least 4 characters</Text>
      ) : null}
      {/* if the password is less than 4 charcters then display text else display nothing */}
    </View>
  );
};

/* You have to call the style in the TextInput element as default 0 style   */
/*  ios by default capitalises the first character
    - also autocorrect, not good for email etc  */

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "lightgray",
    paddingTop: 20,
    fontSize: 20,
  },
});
export default TextInputScreen;
