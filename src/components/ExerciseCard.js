import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph, Button, useTheme } from 'react-native-paper';

// Use a web-based URL for the placeholder image
const placeholderImageUrl = 'https://via.placeholder.com/150'; // Example placeholder image URL

const ExerciseCard = ({ exerciseName, description, imageUrl }) => {
  const { colors } = useTheme();
  const [imageLoadError, setImageLoadError] = useState(false);

  return (
    <Card style={styles.card}>
      <Card.Content>
        <Title style={{ color: colors.primary }}>{exerciseName}</Title>
        <Paragraph style={{ color: colors.text }}>{description || 'No description available.'}</Paragraph>
      </Card.Content>
      <Image
        source={!imageLoadError && imageUrl ? { uri: imageUrl } : { uri: placeholderImageUrl }}
        style={styles.image}
        onError={() => setImageLoadError(true)}
      />
      <Card.Actions>
        <Button 
          icon="heart" 
          mode="contained" 
          onPress={() => console.log('Liked')} 
          color={colors.accent}
          style={{ margin: 4 }}
        >
          Like
        </Button>
        <Button 
          icon="play" 
          mode="outlined" 
          onPress={() => console.log('Start Exercise')} 
          color={colors.primary}
          style={{ margin: 4 }}
        >
          Start
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 8,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: 150,
    marginTop: 10,
  },
});

export default ExerciseCard;
