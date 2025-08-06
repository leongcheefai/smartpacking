import { router, useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function LoadingScreen() {
  const [currentStep, setCurrentStep] = useState(0);
  const colorScheme = useColorScheme();
  const { itinerary } = useLocalSearchParams();

  const steps = [
    'Understanding your itinerary...',
    'drafting your packing list...',
  ];

  useEffect(() => {
    // Simulate processing steps
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          // Navigate to results after all steps
          setTimeout(() => {
            router.replace({
              pathname: '/screens/ResultsScreen',
              params: { itinerary }
            });
          }, 1000);
          return prev;
        }
      });
    }, 2000);

    return () => clearInterval(stepInterval);
  }, []);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.content}>
        <ActivityIndicator
          size="large"
          color={Colors[colorScheme ?? 'light'].tint}
          style={styles.spinner}
        />
        
        <ThemedView style={styles.textContainer}>
          {steps.map((step, index) => (
            <ThemedText
              key={index}
              style={[
                styles.stepText,
                {
                  color: index <= currentStep 
                    ? Colors[colorScheme ?? 'light'].text 
                    : Colors[colorScheme ?? 'light'].icon,
                  fontWeight: index === currentStep ? 'bold' : 'normal',
                }
              ]}
            >
              {step}
            </ThemedText>
          ))}
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
    alignItems: 'center',
    gap: 40,
  },
  spinner: {
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    gap: 16,
  },
  stepText: {
    fontSize: 18,
    textAlign: 'center',
  },
}); 