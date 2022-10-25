import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from "@screens/onboarding/IntroScreen";
import HomeScreen from "@screens/main/HomeScreen";

export default function MainNav() {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
        animationTypeForReplace: "push",
      }}
      initialRouteName="Home"
    >
      <MainStack.Screen name="Home" component={HomeScreen} />
    </MainStack.Navigator>
  );
}
