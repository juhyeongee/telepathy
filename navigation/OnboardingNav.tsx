import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "@screens/onboarding/IntroScreen";
import TutorialScreen from "@screens/onboarding/TutorialScreen";
import SignUpScreen from "@/screens/onboarding/SignUpScreen";
import SignInScreen from "@/screens/onboarding/SignInScreen";

export default function OnboardingNav() {
  const OnboardingStack = createNativeStackNavigator();

  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}
      initialRouteName="SignUp"
    >
      <OnboardingStack.Screen name="Intro" component={IntroScreen} />
      <OnboardingStack.Screen name="Tutorial" component={TutorialScreen} />
      <OnboardingStack.Screen name="SignUp" component={SignUpScreen} />
      <OnboardingStack.Screen name="SignIn" component={SignInScreen} />
    </OnboardingStack.Navigator>
  );
}
