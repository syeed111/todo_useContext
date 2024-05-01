import React, { useContext, useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";
import { TodoContext } from "../contexts/TodoContext";

export default function AddTodo() {
  const { inputText, AddTodo, submitHandler, changeHandler } =
    useContext(TodoContext);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={changeHandler}
        value={inputText}
      />
      <Button color="coral" onPress={submitHandler} title="add todo" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
