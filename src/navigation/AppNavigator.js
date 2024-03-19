import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, DefaultTheme as NavigationDefaultTheme } from '@react-navigation/native';
import LandingPage from '../screens/LandingPage';
import ExercisesPage from '../screens/ExercisesPage';
import { useTheme } from 'react-native-paper';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { colors } = useTheme(); // Use theme colors from React Native Paper

  // Define a custom navigation theme that aligns with our app theme
  const navigationTheme = {
    ...NavigationDefaultTheme,
    colors: {
      ...NavigationDefaultTheme.colors,
      background: colors.background, // Use the background color from React Native Paper theme
      card: colors.surface, // Card background color in the stack navigator
      text: colors.text, // Text color in the stack navigator
      primary: colors.primary, // Primary color for tints
    },
  };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator initialRouteName="LandingPage"
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.primary, // Use primary color for header background
          },
          headerTintColor: '#ffffff', // Set text color in the header
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="LandingPage" 
          component={LandingPage} 
          options={{ title: 'Exercise Categories' }} 
        />
        <Stack.Screen 
          name="ExercisesPage" 
          component={ExercisesPage} 
          options={({ route }) => ({ title: route.params.categoryName })} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
