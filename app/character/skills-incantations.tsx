import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCharacter } from '../../contexts/CharacterContext';

const SkillItem = ({ name, description }: { name: string; description: string }) => (
  <View style={styles.skillContainer}>
    <Text style={styles.skillName}>{name}</Text>
    <Text style={styles.skillDescription}>{description}</Text>
  </View>
);

const SkillsIncantationsScreen = () => {
  const { character } = useCharacter();

  if (!character) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Loading...</Text>
      </SafeAreaView>
    );
  }

  const skills = character.skills || [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Skills & Incantations</Text>
        <View style={styles.section}>
          {skills.length === 0 ? (
            <Text style={styles.noSkillsText}>No skills learned yet.</Text>
          ) : (
            skills.map((skill: any, index: number) => (
              <SkillItem key={index} name={skill.name} description={skill.description} />
            ))
          )}
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
  noSkillsText: {
    color: '#ccc',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default SkillsIncantationsScreen;