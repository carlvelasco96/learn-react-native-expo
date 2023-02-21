import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal } from "react-native";

const GoalInput = (props: {
  onAddGoal(enteredText: string): void;
  isVisible: boolean;
  onEndAddGoal(): void;
}) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText: string) {
    setEnteredGoalText(enteredText);
  }

  return (
    <Modal visible={props.isVisible} animationType="slide">
      <View style={styles.inputCountainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                props.onAddGoal(enteredGoalText);
                setEnteredGoalText("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onEndAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputCountainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});

export default GoalInput;
