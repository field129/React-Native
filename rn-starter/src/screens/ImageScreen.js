import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ImageDetail from "../compenents/ImageDetail";

// Reusing you have to create ImageDetail const and imoport it

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={"3/10"}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score="7/10"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score="9/10"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
