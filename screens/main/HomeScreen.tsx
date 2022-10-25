import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryBtn from "@components/PrimaryBtn";
import { Colors } from "@constants/Colors";
import Swiper from "react-native-swiper";
import { storeData } from "@/utils/http";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Swiper>
        <View>
          <Text>이곳은 홈 화면입니다</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.textInput}>
            <TextInput />
          </View>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <PrimaryBtn
              onPress={() => console.log("pressed")}
              text="텔레파시 보내기"
            />
          </View>
        </View>
        <View>
          <Text>로그인 화면 </Text>
        </View>
      </Swiper>
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
  textInput: {
    flex: 2,
    width: "100%",
    backgroundColor: "white",
  },
});
