import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;
const numColumns = 4;
const itemSize = windowWidth / numColumns - 20;

const inventoryItems = [
  { id: '1', name: 'Estus Flask', icon: 'https://images.unsplash.com/photo-1602524810963-1a7a7a7a7a7a?auto=format&fit=crop&w=64&q=80' },
  { id: '2', name: 'Firebomb', icon: 'https://images.unsplash.com/photo-1602524810963-1a7a7a7a7a7a?auto=format&fit=crop&w=64&q=80' },
  { id: '3', name: 'Longsword', icon: 'https://images.unsplash.com/photo-1602524810963-1a7a7a7a7a7a?auto=format&fit=crop&w=64&q=80' },
  { id: '4', name: 'Knight Shield', icon: 'https://images.unsplash.com/photo-1602524810963-1a7a7a7a7a7a?auto=format&fit=crop&w=64&q=80' },
  { id: '5', name: 'Magic Scroll', icon: 'https://images.unsplash.com/photo-1602524810963-1a7a7a7a7a7a?auto=format&fit=crop&w=64&q=80' },
  { id: '6', name: 'Herb', icon: 'https://images.unsplash.com/photo-1602524810963-1a7a7a7a7a7a?auto=format&fit=crop&w=64&q=80' },
  { id: '7', name: 'Gold Coin', icon: 'https://images.unsplash.com/photo-1602524810963-1a7a7a7a7a7a?auto=format&fit=crop&w=64&q=80' },
  { id: '8', name: 'Helmet', icon: 'https://images.unsplash.com/photo-1602524810963-1a7a7a7a7a7a?auto=format&fit=crop&w=64&q=80' },
];

const InventoryScreen = () => {
  const renderItem = ({ item }: { item: typeof inventoryItems[0] }) => (
    <View style={[styles.itemContainer, { width: itemSize, height: itemSize }]}> 
      <Image source={{ uri: item.icon }} style={styles.itemIcon} />
      <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Inventory</Text>
      <FlatList
        data={inventoryItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
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
    margin: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  itemIcon: {
    width: 48,
    height: 48,
    marginBottom: 8,
    borderRadius: 6,
  },
  itemName: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default InventoryScreen;
