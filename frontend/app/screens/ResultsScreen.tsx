import { useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface PackingItem {
  id: string;
  name: string;
  checked: boolean;
}

interface PackingCategory {
  id: string;
  name: string;
  items: PackingItem[];
  expanded: boolean;
}

export default function ResultsScreen() {
  const { itinerary } = useLocalSearchParams();
  const colorScheme = useColorScheme();
  
  // Mock data - in real app this would come from API
  const [packingCategories, setPackingCategories] = useState<PackingCategory[]>([
    {
      id: '1',
      name: 'Clothes',
      expanded: true,
      items: [
        { id: '1', name: 't-shirts', checked: false },
        { id: '2', name: 'shorts', checked: false },
        { id: '3', name: 'socks', checked: false },
      ]
    },
    {
      id: '2',
      name: 'others',
      expanded: true,
      items: [
        { id: '4', name: 'towels', checked: false },
        { id: '5', name: 'passport', checked: false },
      ]
    }
  ]);

  const toggleCategory = (categoryId: string) => {
    setPackingCategories(prev => 
      prev.map(cat => 
        cat.id === categoryId 
          ? { ...cat, expanded: !cat.expanded }
          : cat
      )
    );
  };

  const toggleItem = (categoryId: string, itemId: string) => {
    setPackingCategories(prev => 
      prev.map(cat => 
        cat.id === categoryId 
          ? {
              ...cat,
              items: cat.items.map(item => 
                item.id === itemId 
                  ? { ...item, checked: !item.checked }
                  : item
              )
            }
          : cat
      )
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Travel Details Section */}
        <ThemedView style={styles.travelDetailsSection}>
          <ThemedView style={styles.detailRow}>
            <ThemedView style={[
              styles.detailCard,
              {
                backgroundColor: Colors[colorScheme ?? 'light'].background,
                borderColor: Colors[colorScheme ?? 'light'].tint,
              }
            ]}>
              <ThemedText style={styles.detailLabel}>destination</ThemedText>
              <ThemedText style={styles.detailValue}>Tokyo, Japan</ThemedText>
            </ThemedView>
            
            <ThemedView style={[
              styles.detailCard,
              {
                backgroundColor: Colors[colorScheme ?? 'light'].background,
                borderColor: Colors[colorScheme ?? 'light'].tint,
              }
            ]}>
              <ThemedText style={styles.detailLabel}>travel date</ThemedText>
              <ThemedText style={styles.detailValue}>Dec 15-20, 2024</ThemedText>
            </ThemedView>
          </ThemedView>
          
          <ThemedView style={[
            styles.detailCard,
            styles.fullWidthCard,
            {
              backgroundColor: Colors[colorScheme ?? 'light'].background,
              borderColor: Colors[colorScheme ?? 'light'].tint,
            }
          ]}>
            <ThemedText style={styles.detailLabel}>purposes, weather</ThemedText>
            <ThemedText style={styles.detailValue}>Business trip, 15°C, Rainy</ThemedText>
          </ThemedView>
        </ThemedView>

        {/* Packing List Section */}
        <ThemedView style={styles.packingListSection}>
          <ThemedText style={styles.packingListTitle}>Packing list</ThemedText>
          
          <ThemedView style={[
            styles.packingListContainer,
            {
              backgroundColor: Colors[colorScheme ?? 'light'].background,
              borderColor: Colors[colorScheme ?? 'light'].tint,
            }
          ]}>
            {packingCategories.map((category) => (
              <ThemedView key={category.id} style={styles.categoryContainer}>
                <TouchableOpacity
                  style={styles.categoryHeader}
                  onPress={() => toggleCategory(category.id)}
                >
                  <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
                  <ThemedText style={styles.expandIcon}>
                    {category.expanded ? '▼' : '▶'}
                  </ThemedText>
                </TouchableOpacity>
                
                {category.expanded && (
                  <ThemedView style={styles.itemsContainer}>
                    {category.items.map((item) => (
                      <TouchableOpacity
                        key={item.id}
                        style={styles.itemRow}
                        onPress={() => toggleItem(category.id, item.id)}
                      >
                        <View style={[
                          styles.checkbox,
                          {
                            borderColor: Colors[colorScheme ?? 'light'].tint,
                            backgroundColor: item.checked 
                              ? Colors[colorScheme ?? 'light'].tint 
                              : 'transparent',
                          }
                        ]}>
                          {item.checked && (
                            <ThemedText style={styles.checkmark}>✓</ThemedText>
                          )}
                        </View>
                        <ThemedText style={[
                          styles.itemName,
                          {
                            textDecorationLine: item.checked ? 'line-through' : 'none',
                            color: item.checked 
                              ? Colors[colorScheme ?? 'light'].icon 
                              : Colors[colorScheme ?? 'light'].text,
                          }
                        ]}>
                          {item.name}
                        </ThemedText>
                      </TouchableOpacity>
                    ))}
                  </ThemedView>
                )}
              </ThemedView>
            ))}
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  travelDetailsSection: {
    gap: 12,
    marginBottom: 30,
  },
  detailRow: {
    flexDirection: 'row',
    gap: 12,
  },
  detailCard: {
    flex: 1,
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
  },
  fullWidthCard: {
    flex: undefined,
  },
  detailLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  detailValue: {
    fontSize: 14,
  },
  packingListSection: {
    gap: 16,
  },
  packingListTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  packingListContainer: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    gap: 16,
  },
  categoryContainer: {
    gap: 8,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  expandIcon: {
    fontSize: 12,
  },
  itemsContainer: {
    gap: 8,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 4,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  itemName: {
    fontSize: 14,
    flex: 1,
  },
}); 