import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCharacter } from '../../contexts/CharacterContext';

const EffectItem = ({ effect }: { effect: any }) => (
  <View style={styles.effectContainer}>
    <Image source={{ uri: effect.icon }} style={styles.effectIcon} />
    <View style={styles.effectTextContainer}>
      <Text style={styles.effectName}>{effect.name}</Text>
      <Text style={styles.effectDuration}>{effect.duration}</Text>
    </View>
  </View>
);

const StatusEffectsScreen = () => {
  const { character } = useCharacter();

  if (!character) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Loading...</Text>
      </SafeAreaView>
    );
  }

  const effects = character.status_effects || [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Status Effects</Text>
      <FlatList
        data={effects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EffectItem effect={item} />}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'gold',
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: 'serif',
  },
  listContainer: {
    paddingBottom: 20,
  },
  effectContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    padding: 12,
    marginVertical: 8,
    alignItems: 'center',
  },
  effectIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
  },
  effectTextContainer: {
    flex: 1,
  },
  effectName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  effectDuration: {
    color: '#ccc',
    fontSize: 14,
  },
});

export default StatusEffectsScreen;