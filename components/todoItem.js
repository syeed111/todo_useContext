import { TodoContext } from "../contexts/TodoContext";
import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function TodoItem({ item }) {
  const { pressHandler, updateHandler, blankBox, changeToggle } =
    useContext(TodoContext);

  return (
    // <TouchableOpacity onPress={() => updateHandler(item.key, item.text)}>
    <View style={styles.container}>
      <View style={styles.item}>
        <MaterialIcons
          name={blankBox}
          size={25}
          color="#333"
          onPress={changeToggle}
        />
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
      <View style={styles.icons}>
        <MaterialIcons
          name="delete-forever"
          size={24}
          color="black"
          onPress={() => pressHandler(item.key, item.text)}
        />
        <MaterialIcons
          name="edit-note"
          size={24}
          color="black"
          onPress={() => updateHandler(item.key, item.text)}
        />
      </View>
    </View>
    // </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,

    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 1,
    borderRadius: 10,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    overflow: "scroll",
  },
  itemText: {
    marginLeft: 10,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
});
