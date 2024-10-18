import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./src/components/Button"; 

const buttons = [
  ["C", "±", "%", "÷"],
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

export default function App() {
  const [display, setDisplay] = useState("0");
  const [firstValue, setFirstValue] = useState("");
  const [operator, setOperator] = useState("");
  //const [Value, setValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const handleTap = (tipo, valor) => {
    if (tipo === "number") {

      if (operator === "") {
        setFirstValue(firstValue + valor);
        setDisplay(firstValue + valor);
      } else {
        setSecondValue(secondValue + valor);
        setDisplay(secondValue + valor);
      }

    }

    if (tipo === "operator") {
      setOperator(valor);
    }

    if (tipo === "clear") {
      setFirstValue("");
      setOperator("");
      setSecondValue("");
      setDisplay("0");
    }

    if (tipo === "equal") {
      let result;
      switch (operator) {
        case "+":
          result = parseFloat(firstValue) + parseFloat(secondValue);
          break;
        case "−":
          result = parseFloat(firstValue) - parseFloat(secondValue);
          break;
        case "×":
          result = parseFloat(firstValue) * parseFloat(secondValue);
          break;
        case "÷":
          result = parseFloat(firstValue) / parseFloat(secondValue);
          break;
        case "%":
          result = parseFloat(firstValue) / 100;
          break;
        default:
          return;
      }
      setDisplay(result);
      setFirstValue(result);
      setOperator("");
      setSecondValue("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculation of joaoX</Text>
      <Text style={styles.display}>{display}</Text>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>

          {row.map((button) => (
            <Button
              key={button}
              label={button}
              onPress={() =>
                handleTap(
                  !isNaN(button) || button === "."
                    ? "number"
                    : button === "C"
                    ? "clear"
                    : button === "="
                    ? "equal"
                    : "operator",
                  button
                )
              }
              style={[
                button === "0" ? styles.zeroButton : null,
                ["÷", "×", "−", "+", "="].includes(button)
                  ? styles.operatorButton
                  : null,
              ]}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "black",
  },
  title: {
    color: "pink",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginBottom: 10,
    textAlign: "center",
    marginVertical: 20,
  },
  display: {
    color: "white",
    fontSize: 80,
    textAlign: "right",
    margin: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  zeroButton: {
    flex: 2,
  },
  operatorButton: {
    backgroundColor: "#FF9500",
  },
});
