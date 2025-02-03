import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import * as SplashScreen from "expo-splash-screen";
import { theme } from "./src/global/styles/theme";
import { Dashboard } from "./src/screens/Dashboard";

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Previne que a splash screen desapareça automaticamente
        await SplashScreen.preventAutoHideAsync();

        if (fontsLoaded) {
          // Agora esconde a splash screen após as fontes carregarem
          await SplashScreen.hideAsync();
        }
      } catch (error) {
        console.warn(error);
      }
    }

    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
