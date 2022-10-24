import { View, Text, StyleSheet } from "react-native";
import PrimaryBtn from "@/components/PrimaryBtn";
import { Colors } from "../../constants/Colors";

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>SignUpScreen</Text>
      </View>
      <PrimaryBtn onPress={() => console.log("pressed")} text="다음" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    flex: 1,
    backgroundColor: Colors.bgColor,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
