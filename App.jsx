import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import { theme } from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';
import { AuthProvider } from './src/hooks/auth';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Hide the splash screen once fonts are loaded
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Render nothing while fonts are loading
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </ThemeProvider>
  );
}
