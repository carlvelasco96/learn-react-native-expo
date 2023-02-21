import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image,
} from "react-native";

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
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onEndAddGoal}
              color={"#f31282"}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              onPress={() => {
                props.onAddGoal(enteredGoalText);
                setEnteredGoalText("");
              }}
              color="#b180f0"
            />
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
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 16,
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
