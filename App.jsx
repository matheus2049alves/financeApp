import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';
import { theme } from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';
import { Login } from './src/screens/Login';
import { SignUp } from './src/screens/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/routes';

import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { MyExpenses } from './src/screens/MyExpenses';

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
      <SignUp />
    </ThemeProvider>
  );
}
