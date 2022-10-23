import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { storeData } from "./util/http";
import HomeScreen from "./screens/HomeScreen";
import { Colors } from "./constants/Colors";
import HomeNav from "./navigation/HomeNav";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.bgColor }}>
        <HomeNav />
      </SafeAreaView>
    </NavigationContainer>
  );
}
