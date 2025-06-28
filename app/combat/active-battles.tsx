import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const sampleBattles = [
  { id: '1', opponent: 'Black Knight', status: 'In Progress' },
  { id: '2', opponent: 'Dragon Lord', status: 'Waiting' },
  { id: '3', opponent: 'Undead Horde', status: 'In Progress' },
];

const BattleItem = ({ battle }: { battle: typeof sampleBattles[0] }) => (
  <View style={styles.battleContainer}>
    <Text style={styles.opponent}>{battle.opponent}</Text>
    <Text style={styles.status}>{battle.status}</Text>
    <TouchableOpacity style={styles.actionButton}>
      <Text style={styles.actionButtonText}>View</Text>
    </TouchableOpacity>
  </View>
);

const ActiveBattlesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Active Battles</Text>
      <FlatList
        data={sampleBattles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BattleItem battle={item} />}
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
  battleContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  opponent: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  status: {
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

export default ActiveBattlesScreen;
