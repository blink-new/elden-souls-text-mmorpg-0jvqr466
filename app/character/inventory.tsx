import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCharacter } from '../../contexts/CharacterContext';

const InventoryItem = ({ item }: { item: any }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.icon }} style={styles.itemIcon} />
    <Text style={styles.itemName}>{item.name}</Text>
    <Text style={styles.itemQuantity}>x{item.quantity}</Text>
  </View>
);

const InventoryScreen = () => {
  const { character } = useCharacter();

  if (!character) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Loading...</Text>
      </SafeAreaView>
    );
  }

  const items = character.inventory || [];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Inventory</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <InventoryItem item={item} />}
        numColumns={2}
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
  itemContainer: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    margin: 8,
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
  },
  itemIcon: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  itemName: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  itemQuantity: {
    color: '#ccc',
    fontSize: 14,
  },
});

export default InventoryScreen;