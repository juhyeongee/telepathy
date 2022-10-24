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
import { storeData } from "./utils/http";
import HomeScreen from "./screens/HomeScreen";
import { Colors } from "./constants/Colors";
import HomeNav from "./navigation/HomeNav";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontLoaded] = useFonts({
    neodgm: require("./fonts/neodgm.ttf"),
  });

  useEffect(() => {
    if (!fontLoaded) {
    } else {
      SplashScreen.hideAsync();
      setAppIsReady(true);
    }
  }, [fontLoaded]);

  if (appIsReady) {
    return (
      <NavigationContainer>
        <SafeAreaView
          style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: Colors.bgColor,
          }}
        >
          {/* <HomeNav /> */}
          <Text style={{ fontFamily: "neodgm", color: "white" }}>
            폰트적용 완료
          </Text>
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}
