import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from "react-native-safe-area-context";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: 50,
          paddingHorizontal: 5,
          paddingTop: 5,
          backgroundColor: "black",
          position: "absolute",
          borderTopWidth: 0,
          navigationBarColor: "gold",
        },
        navigationBarColor: "gold",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, tabBarIcon: ({ color, size }) => <MaterialIcons name="dashboard" size={24} color="white" /> }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false, orientation: "portrait" }} />
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false, orientation: "portrait" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
