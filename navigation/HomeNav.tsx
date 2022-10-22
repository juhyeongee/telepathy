import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../navigation/HomeNav";

export default function HomeNav() {
  const HomeStack = createNativeStackNavigator();

  const HomeScreen = () => {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}></HomeStack.Screen>
      </HomeStack.Navigator>
    );
  };
}
