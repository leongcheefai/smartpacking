import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Alert,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

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

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
    >
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    gap: 40,
    minHeight: '100%',
  },
  greetingSection: {
    alignItems: 'center',
    gap: 8,
    marginTop: 40,
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
    marginBottom: 40,
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