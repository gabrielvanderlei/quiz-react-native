import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export default function Button(props:any) {
  return (
    <View>
      <TouchableOpacity {...props} style={styles.button}></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(230, 230, 230)",
    color: "white",
    paddingVertical: 7,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgb(200, 200, 200)",
    borderBottomWidth: 2,
    width: 200,
    margin: 10,
    textAlign: "center"
  }
});
