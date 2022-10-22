import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { storeData } from "./util/http";

export default function App() {
  const HomeStack = createNativeStackNavigator();

  const exampleObject = {
    myName: "juhyeong",
    age: 28,
  };

  const HomeScreen = () => {
    return (
      <View style={styles.container}>
        <Text> Home Screen1</Text>

        <Pressable
          onPress={() => {
            storeData(exampleObject);
            console.log("pressed");
          }}
        >
          <View>
            <Text>Send firestore info with Realtime DB </Text>
          </View>
        </Pressable>
      </View>
    );
  };

  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}></HomeStack.Screen>
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
