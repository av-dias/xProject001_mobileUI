import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView, initialWindowMetrics } from "react-native-safe-area-context";
import { useKeyboard } from "@react-native-community/hooks";

import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ActivityDetails from "./pages/ActivityDetails";
import MapPage from "./pages/MapPage";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";

import { GestureHandlerRootView } from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  const keyboard = useKeyboard();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          margin: 20,
          height: 50,
          marginBottom: keyboard.keyboardShown ? 0 : 5,
          borderRadius: 15,
          paddingHorizontal: 5,
          paddingTop: 5,
          backgroundColor: "black",
          position: "absolute",
          borderTopWidth: 0,
          navigationBarColor: "gold",
          elevation: 1,
        },
        navigationBarColor: "gold",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false, tabBarIcon: ({ color, size }) => <MaterialIcons name="dashboard" size={24} color="white" /> }}
      />
      <Tab.Screen name="ActivityDetails" component={ActivityDetails} options={{ headerShown: false, tabBarButton: () => null }} />
      <Tab.Screen
        name="Map"
        component={MapPage}
        options={{ headerShown: false, tabBarIcon: ({ color, size }) => <MaterialIcons name="dashboard" size={24} color="white" /> }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{ headerShown: false, tabBarIcon: ({ color, size }) => <MaterialIcons name="dashboard" size={24} color="white" /> }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false, tabBarIcon: ({ color, size }) => <MaterialIcons name="dashboard" size={24} color="white" /> }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Stack.Navigator>
            <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false, orientation: "portrait" }} />
            <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false, orientation: "portrait" }} />
            <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false, orientation: "portrait" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
