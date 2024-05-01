import { TodoContext } from "../contexts/TodoContext";

import React, { useContext } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import TodoItem from "./todoItem";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => <TodoItem item={item} />}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    marginTop: 20,
  },
});

export default TodoList;
