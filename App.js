import TodoContextProvider from "./contexts/TodoContext";

import React from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import TodoList from "./components/TodoList";
import Header from "./components/header";
import AddTodo from "./components/addTodo";

export default function App() {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("dismissed");
      }}
    >
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <TodoContextProvider>
            <AddTodo />
            <TodoList />
          </TodoContextProvider>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
