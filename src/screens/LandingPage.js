import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

// Dummy categories - in a real app, these might come from an API or a database
const categories = ['Cardio', 'Strength', 'Flexibility', 'Balance'];

const LandingPage = () => {
  const navigation = useNavigation();
  const [error, setError] = useState(''); // Placeholder for error handling

  // Example function to simulate fetching categories
  const fetchCategories = async () => {
    try {
      // Simulate fetching data
      // const response = await fetch('Your API endpoint');
      // const data = await response.json();
      // Update categories based on fetched data
      setError(''); // Reset error on successful fetch
    } catch (err) {
      setError('Failed to fetch categories. Please try again later.'); // Set error on failure
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        categories.map((category, index) => (
          <Button
            key={index}
            mode="contained" // React Native Paper button style
            onPress={() => navigation.navigate('ExercisesPage', { categoryName: category })}
            style={styles.button}
            labelStyle={styles.buttonLabel}
          >
            {category}
          </Button>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  button: {
    marginVertical: 5,
    width: '80%',
  },
  buttonLabel: {
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default LandingPage;
