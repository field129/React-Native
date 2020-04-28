import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      {/* require provides a path for image we want to show*/}

      {/* how to import image from assets directory */}
      <Image source={props.imageSource} />
      <Text>{props.title}</Text>
      <Text>Image Score {props.score}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageDetail;
