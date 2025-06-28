import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const GraphicsScreen = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.text}>Graphics</Text>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' },
  text: { color: 'white', fontSize: 24 },
});

export default GraphicsScreen;