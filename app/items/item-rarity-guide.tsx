import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ItemRarityGuideScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Item Rarity Guide</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
  text: { color: 'white', fontSize: 24 },
});

export default ItemRarityGuideScreen;