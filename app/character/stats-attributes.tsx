
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AttributeItem = ({ label, value }: { label: string; value: number }) => (
  <View style={styles.attributeRow}>
    <Text style={styles.attributeLabel}>{label}</Text>
    <Text style={styles.attributeValue}>{value}</Text>
  </View>
);

const StatsAttributesScreen = () => {
  const stats = {
    level: 75,
    vigor: 30,
    mind: 20,
    endurance: 25,
    strength: 35,
    dexterity: 18,
    intelligence: 10,
    faith: 12,
    arcane: 8,
  };

  const attributes = {
    hp: 1200,
    fp: 150,
    stamina: 125,
    equipLoad: 70.5,
    poise: 55,
    discovery: 108,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Stats & Attributes</Text>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Core Stats</Text>
          {Object.entries(stats).map(([key, value]) => (
            <AttributeItem key={key} label={key.charAt(0).toUpperCase() + key.slice(1)} value={value} />
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Attributes</Text>
          {Object.entries(attributes).map(([key, value]) => (
            <AttributeItem key={key} label={key.charAt(0).toUpperCase() + key.slice(1)} value={value} />
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
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
    paddingBottom: 10,
  },
  attributeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  attributeLabel: {
    color: '#aaa',
    fontSize: 16,
  },
  attributeValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StatsAttributesScreen;
