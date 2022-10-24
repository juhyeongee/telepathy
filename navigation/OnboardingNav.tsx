import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "../screens/onboarding/IntroScreen";
import TutorialScreen from "../screens/onboarding/TutorialScreen";

export default function OnboardingNav() {
  const OnboardingStack = createNativeStackNavigator();

  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}
      initialRouteName="Intro"
    >
      <OnboardingStack.Screen name="Intro" component={IntroScreen} />
      <OnboardingStack.Screen name="Tutorial" component={TutorialScreen} />
      <OnboardingStack.Screen name="SignUp" component={TutorialScreen} />
      <OnboardingStack.Screen name="SignIn" component={TutorialScreen} />
    </OnboardingStack.Navigator>
  );
  return;
}
