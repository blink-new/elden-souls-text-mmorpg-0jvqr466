import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const sampleFormations = [
  { id: '1', name: 'Phalanx', description: 'Tight shield wall formation for defense.' },
  { id: '2', name: 'Wedge', description: 'Pointed formation for breaking enemy lines.' },
  { id: '3', name: 'Echelon', description: 'Staggered formation for flanking.' },
];

const FormationItem = ({ formation }: { formation: typeof sampleFormations[0] }) => (
  <View style={styles.formationContainer}>
    <Text style={styles.formationName}>{formation.name}</Text>
    <Text style={styles.formationDescription}>{formation.description}</Text>
  </View>
);

const UnitFormationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Unit Formations</Text>
      <FlatList
        data={sampleFormations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FormationItem formation={item} />}
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
  formationContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
  },
  formationName: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  formationDescription: {
    color: '#ccc',
    fontSize: 14,
  },
});

export default UnitFormationsScreen;
