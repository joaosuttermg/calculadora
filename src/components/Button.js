import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Button({ label, onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    flex: 1,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 40,
  },
  buttonText: {
    color: "gray",
    fontSize: 50,
  },
});
