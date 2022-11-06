import { View, Text, StyleSheet } from "react-native";
import PrimaryBtn from "@components/PrimaryBtn";
import { Colors } from "@constants/Colors";
import { useState } from "react";
import { login } from "@/utils/auth";
import InputArea from "@/components/InputArea";

export default function SignInScreen() {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const inputChangeHandler = (
    inputIdentifier: string,
    wantToChangeValue: string
  ) => {
    console.log("inputIdentifier", inputIdentifier);
    console.log("wantToChangeValue", wantToChangeValue);
    setInputValues((currentInputValue) => {
      return { ...currentInputValue, [inputIdentifier]: wantToChangeValue };
    }); //여러 인풋이 있는데, 이것에 대한 각각의 핸들러 함수가 필요함
    // 그렇다고 함수를 다 각각 만드는 것은 좀 비효율적인 일
    // 그래서 이것을 extends 가능한 함수로 만드는 것이 좋겠음.
  };

  async function loginHandler(email, password) {
    setIsAuthenticating(true);
    await login(email, password);
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading..</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.2 }}>
        <Text style={styles.title}>회원가입하기</Text>
      </View>
      <View style={styles.inputAreaContainer}>
        <InputArea
          title="이메일"
          textInputConfig={{
            placeholder: "abcd@asdf.com",
            onChangeText: inputChangeHandler.bind(this, "email"),
            value: inputValues.email,
          }}
        />
        <InputArea
          title="비밀번호"
          textInputConfig={{
            placeholder: "10글자 이상 입력해주세요",
            onChangeText: inputChangeHandler.bind(this, "password"),
            value: inputValues.password,
          }}
        />
        <InputArea
          title="비밀번호 확인"
          textInputConfig={{
            onChangeText: inputChangeHandler.bind(this, "passwordConfirm"),
            value: inputValues.password,
          }}
        />
      </View>
      <View style={{ flex: 0.2, width: "100%" }}>
        <PrimaryBtn
          onPress={() => {
            console.log("pressed"),
              loginHandler("jju00788@naver.com", "wnguddl12");
          }}
          text="다음"
        />
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontFamily: "neodgm",
    color: "white",
    fontSize: 14,
    marginBottom: 6,
  },
  inputAreaContainer: {
    flex: 1,
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
