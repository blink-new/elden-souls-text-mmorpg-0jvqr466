import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LevelingProgressionScreen = () => {
  const [level, setLevel] = useState(75);
  const [currentXP, setCurrentXP] = useState(3500);
  const [xpForNextLevel, setXpForNextLevel] = useState(5000);

  const xpProgress = currentXP / xpForNextLevel;

  const handleLevelUp = () => {
    if (currentXP >= xpForNextLevel) {
      setLevel(level + 1);
      setCurrentXP(currentXP - xpForNextLevel);
      setXpForNextLevel(xpForNextLevel + 1000); // Increase XP needed for next level
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Leveling & Progression</Text>
      <View style={styles.levelContainer}>
        <Text style={styles.levelText}>Level: {level}</Text>
      </View>
      <View style={styles.xpBarBackground}>
        <Animated.View style={[styles.xpBarFill, { flex: xpProgress }]} />
        <View style={{ flex: 1 - xpProgress }} />
      </View>
      <Text style={styles.xpText}>{currentXP} / {xpForNextLevel} XP</Text>
      <TouchableOpacity style={styles.levelUpButton} onPress={handleLevelUp}>
        <Text style={styles.levelUpButtonText}>Level Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'gold',
    marginVertical: 20,
    fontFamily: 'serif',
  },
  levelContainer: {
    marginBottom: 20,
  },
  levelText: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },
  xpBarBackground: {
    flexDirection: 'row',
    height: 20,
    width: '100%',
    backgroundColor: '#333',
    borderRadius: 10,
    overflow: 'hidden',
  },
  xpBarFill: {
    backgroundColor: 'gold',
  },
  xpText: {
    color: 'white',
    marginTop: 8,
    marginBottom: 20,
  },
  levelUpButton: {
    backgroundColor: 'gold',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  levelUpButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default LevelingProgressionScreen;
