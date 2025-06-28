import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCharacter } from '../../contexts/CharacterContext';

const EquipmentSlot = ({ slot, item }: { slot: string; item: string }) => (
  <View style={styles.slotRow}>
    <Text style={styles.slotLabel}>{slot}</Text>
    <Text style={styles.slotItem}>{item}</Text>
  </View>
);

const EquipmentArmoursScreen = () => {
  const { character } = useCharacter();

  if (!character) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Loading...</Text>
      </SafeAreaView>
    );
  }

  const equipment = {
    'Right Hand 1': character.right_hand_1 || '-',
    'Right Hand 2': character.right_hand_2 || '-',
    'Left Hand 1': character.left_hand_1 || '-',
    'Left Hand 2': character.left_hand_2 || '-',
    Head: character.head || '-',
    Chest: character.chest || '-',
    Arms: character.arms || '-',
    Legs: character.legs || '-',
    Talisman_1: character.talisman_1 || '-',
    Talisman_2: character.talisman_2 || '-',
    Talisman_3: character.talisman_3 || '-',
    Talisman_4: character.talisman_4 || '-',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Equipment & Armours</Text>
        <View style={styles.section}>
          {Object.entries(equipment).map(([key, value]) => (
            <EquipmentSlot key={key} slot={key.replace('_', ' ')} item={value} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'gold',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'serif',
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    padding: 15,
  },
  slotRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  slotLabel: {
    color: '#aaa',
    fontSize: 16,
  },
  slotItem: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EquipmentArmoursScreen;