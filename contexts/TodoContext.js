import React, { createContext, useState } from "react";
import { Alert } from "react-native";
export const TodoContext = createContext();

const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const [toggle, setToggle] = useState(false);
  const changeToggle = () => {
    setToggle(!toggle);
  };
  const blankBox = !toggle ? "check-box-outline-blank" : "check-box";

  const [inputText, setInputText] = useState("");

  const changeHandler = (val) => {
    setInputText(val);
  };

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  const submitHandler = () => {
    if (inputText.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text: inputText, key: Math.random().toString() },
          ...prevTodos,
        ];
      });
      setInputText("");
    } else {
      Alert.alert("OOPS", "Todo must be over 3 characters long", [
        { text: "Understood", onPress: () => console.log("alert closed") },
      ]);
    }
  };

  const updateHandler = (key, value) => {
    setInputText(value);
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key != key);
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        inputText,
        blankBox,
        changeHandler,
        pressHandler,
        submitHandler,
        updateHandler,
        changeToggle,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
