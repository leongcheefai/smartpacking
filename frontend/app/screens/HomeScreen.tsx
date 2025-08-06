import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { router } from 'expo-router';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeScreen() {
  const [itinerary, setItinerary] = useState('');
  const colorScheme = useColorScheme();

  const handleSubmit = () => {
    if (itinerary.trim()) {
      // Navigate to loading screen with itinerary data
      router.push({
        pathname: '/screens/LoadingScreen',
        params: { itinerary: itinerary.trim() }
      });
    } else {
      Alert.alert('Please enter your travel itinerary');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        {/* Greeting Section */}
        <ThemedView style={styles.greetingSection}>
          <ThemedText style={styles.greeting}>Hello, CF</ThemedText>
          <ThemedText style={styles.question}>Where are you going next?</ThemedText>
        </ThemedView>

        {/* Input Section */}
        <ThemedView style={styles.inputSection}>
          <TextInput
            style={[
              styles.input,
              {
                backgroundColor: Colors[colorScheme ?? 'light'].background,
                borderColor: Colors[colorScheme ?? 'light'].tint,
                color: Colors[colorScheme ?? 'light'].text,
              }
            ]}
            placeholder="tell me your ideal itinerary"
            placeholderTextColor={Colors[colorScheme ?? 'light'].icon}
            value={itinerary}
            onChangeText={setItinerary}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
          <TouchableOpacity
            style={[
              styles.submitButton,
              {
                backgroundColor: Colors[colorScheme ?? 'light'].tint,
              }
            ]}
            onPress={handleSubmit}
          >
            <ThemedText style={styles.submitButtonText}>Generate Packing List</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 40,
  },
  greetingSection: {
    alignItems: 'center',
    gap: 8,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 18,
    textAlign: 'center',
  },
  inputSection: {
    gap: 20,
  },
  input: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    minHeight: 120,
  },
  submitButton: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 