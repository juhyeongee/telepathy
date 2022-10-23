import { View, Text, StyleSheet, Pressable } from "react-native";
import PrimaryBtn from "../components/PrimaryBtn";
import { Colors } from "../constants/Colors";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>이곳은 홈 화면입니다</Text>
      </View>
      <PrimaryBtn
        onPress={() => console.log("pressed")}
        text="텔레파시 보내기"
      />
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
