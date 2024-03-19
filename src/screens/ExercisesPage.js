import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native'; // Ensure Text is imported
import ExerciseCard from '../components/ExerciseCard';
import exercisesData from '../data/exercises'; // Import the structured data
import { useTheme } from 'react-native-paper';

const ExercisesPage = ({ route }) => {
  const { categoryName } = route.params;
  const exercises = exercisesData[categoryName] || [];
  const { colors } = useTheme(); // Use theme colors for styling

  return (
    <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.primary }]}>{categoryName} Exercises</Text>
      {exercises.map((exercise, index) => (
        // Pass the entire exercise object to the ExerciseCard, including imageUrl
        <ExerciseCard 
          key={index} 
          exerciseName={exercise.name} 
          description={exercise.description} 
          imageUrl={exercise.imageUrl} // Assuming your exercise data includes imageUrl
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default ExercisesPage;
