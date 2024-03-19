import React from 'react';
import { PaperProvider, DefaultTheme } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator';

// Define a custom theme
const theme = {
  ...DefaultTheme,
  // Specify custom colors
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', // Primary color for your app
    accent: '#03dac4', // Secondary color for your app
    background: '#f6f6f6', // Background color for screens
    text: '#000000', // Text color
    surface: '#ffffff', // Background color of components like Card, Modal
  },
  // Add more customization for fonts, roundness, etc., if needed
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
