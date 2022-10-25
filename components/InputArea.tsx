import { View, Text, StyleSheet, TextInput } from "react-native";
import { Colors } from "@constants/Colors";

interface IInputArea {
  title?: string;
  textInputConfig?: object;
}

export default function InputArea({ title, textInputConfig }: IInputArea) {
  const inputStyle = [styles.inputBox];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...textInputConfig} style={inputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 80,
    backgroundColor: Colors.bgColor,
  },
  title: {
    fontFamily: "neodgm",
    color: "white",
    fontSize: 14,
    marginBottom: 6,
  },
  inputBox: {
    marginBottom: 10,
    backgroundColor: "white",
    width: "100%",
    height: 48,
    borderRadius: 5,
    paddingLeft: 10,
  },
});
