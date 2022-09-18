import FontAwesome from "@expo/vector-icons/FontAwesome";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Audio } from "expo-av";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect, useState } from "react";

import HomeScreen from "./screens/HomeScreen";
import LeaderboardScreen from "./screens/LeaderboardScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createStackNavigator();

export const App = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const loadResourcesAndDataAsync = async () => {
      try {
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(FontAwesome.font);
        await Font.loadAsync({
          rainyhearts: require("../assets/fonts/rainyhearts.ttf"),
          thicc: require("../assets/fonts/thicc.ttf"),
        });
        const { sound } = await Audio.Sound.createAsync(
          require("../assets/music.mp3")
        );
        await sound.playAsync();
      } catch (e) {
        console.error(e);
      } finally {
        await SplashScreen.hideAsync();
        setAppReady(true);
      }
    };

    loadResourcesAndDataAsync();
  }, []);

  if (!appReady) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Play"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
