import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const sampleTactics = [
  { id: '1', name: 'Aggressive', description: 'Focus on offense and quick attacks.' },
  { id: '2', name: 'Defensive', description: 'Prioritize defense and counterattacks.' },
  { id: '3', name: 'Balanced', description: 'Mix of offense and defense.' },
];

const TacticItem = ({ tactic }: { tactic: typeof sampleTactics[0] }) => (
  <View style={styles.tacticContainer}>
    <View>
      <Text style={styles.tacticName}>{tactic.name}</Text>
      <Text style={styles.tacticDescription}>{tactic.description}</Text>
    </View>
    <TouchableOpacity style={styles.actionButton}>
      <Text style={styles.actionButtonText}>Edit</Text>
    </TouchableOpacity>
  </View>
);

const BattleTacticsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Battle Tactics</Text>
      <FlatList
        data={sampleTactics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TacticItem tactic={item} />}
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
  tacticContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tacticName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  tacticDescription: {
    color: '#ccc',
    fontSize: 14,
  },
  actionButton: {
    backgroundColor: 'gold',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  actionButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default BattleTacticsScreen;
