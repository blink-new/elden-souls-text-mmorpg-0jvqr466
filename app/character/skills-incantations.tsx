
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SkillItem = ({ name, description }: { name: string; description: string }) => (
  <View style={styles.skillContainer}>
    <Text style={styles.skillName}>{name}</Text>
    <Text style={styles.skillDescription}>{description}</Text>
  </View>
);

const SkillsIncantationsScreen = () => {
  const skills = [
    { name: 'Lion\'s Claw', description: 'Somersault forward and strike foes with a heavy blow.' },
    { name: 'Glintstone Pebble', description: 'Fires a magic projectile from a glintstone staff.' },
    { name: 'Heal', description: 'Heals a moderate amount of HP.' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Skills & Incantations</Text>
        <View style={styles.section}>
          {skills.map((skill, index) => (
            <SkillItem key={index} name={skill.name} description={skill.description} />
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
  },
  skillContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  skillName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  skillDescription: {
    color: '#ccc',
    fontSize: 14,
  },
});

export default SkillsIncantationsScreen;
