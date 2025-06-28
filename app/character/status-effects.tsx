import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const sampleEffects = [
  { id: '1', name: 'Blessing of Strength', duration: '5m 30s', icon: 'https://img.icons8.com/ios-filled/50/00ff00/strength.png' },
  { id: '2', name: 'Curse of Weakness', duration: '2m 10s', icon: 'https://img.icons8.com/ios-filled/50/ff0000/curse.png' },
  { id: '3', name: 'Regeneration', duration: '10m 0s', icon: 'https://img.icons8.com/ios-filled/50/00ffff/regeneration.png' },
];

const EffectItem = ({ effect }: { effect: typeof sampleEffects[0] }) => (
  <View style={styles.effectContainer}>
    <Image source={{ uri: effect.icon }} style={styles.effectIcon} />
    <View style={styles.effectTextContainer}>
      <Text style={styles.effectName}>{effect.name}</Text>
      <Text style={styles.effectDuration}>{effect.duration}</Text>
    </View>
  </View>
);

const StatusEffectsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Status Effects</Text>
      <FlatList
        data={sampleEffects}
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
