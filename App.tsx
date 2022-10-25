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
import { Colors } from "./constants/Colors";
import MainNav from "./navigation/MainNav";
import OnboardingNav from "./navigation/OnboardingNav";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useMemo, useState } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [nowUserPosition, setNowUserPosition] = useState();

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

  // const userPositionObject = {
  //   onboarding: "onboarding",
  // };
  // const userposition = useMemo(() => {
  //   return nowUserPosition;
  // }, [nowUserPosition]);

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
          {/* <MainNav /> */}
          <OnboardingNav />
        </SafeAreaView>
      </NavigationContainer>
    );
  }
}
