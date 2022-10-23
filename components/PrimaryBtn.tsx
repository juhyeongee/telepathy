import { Pressable, View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

interface IPrimaryBtn {
  text: string;
  onPress: () => void;
}

export default function PrimaryBtn({ text, onPress }: IPrimaryBtn) {
  return (
    <Pressable style={styles.btn} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: 50,
    maxHeight: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary,
    borderRadius: 10,
  },
  btnText: {
    color: Colors.bgColor,
    fontSize: 16,
  },
});
