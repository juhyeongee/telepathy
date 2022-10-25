import { View, Text, StyleSheet, TextInput } from "react-native";
import PrimaryBtn from "@/components/PrimaryBtn";
import { Colors } from "@constants/Colors";
import InputArea from "@/components/InputArea";
import { useState } from "react";

export default function SignUpScreen() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const inputChangeHandler = (
    inputIdentifier: string,
    wantToChangeValue: string
  ) => {
    setInputValues((currentInputValue) => {
      return { ...currentInputValue, [inputIdentifier]: wantToChangeValue };
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2 }} />
      <View style={styles.inputAreaContainer}>
        <InputArea
          title="이메일"
          textInputConfig={{ placeholder: "abcd@asdf.com" }}
        />
        <InputArea
          title="비밀번호"
          textInputConfig={{ placeholder: "10글자 이상 입력해주세요" }}
        />
        <InputArea title="비밀번호 확인" />
      </View>
      <View style={{ flex: 0.2, width: "100%" }}>
        <PrimaryBtn onPress={() => console.log("pressed")} text="다음" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%",
    flex: 1,
    backgroundColor: Colors.bgColor,
    alignItems: "flex-start",
  },
  inputAreaContainer: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
