import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useCharacter } from '../../contexts/CharacterContext';

const CharacterCard = () => {
  const { character } = useCharacter();

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1583994009338-31c17554425b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{character?.name || 'Character'}</Text>
        <Text style={styles.level}>Level {character?.level || 1}</Text>
      </View>
      <View style={styles.levelBadge}>
        <Text style={styles.levelText}>25</Text>
      </View>
      <View style={styles.notificationBadge}>
        <Text style={styles.notificationText}>2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  level: {
    fontSize: 14,
    color: 'gray',
  },
  levelBadge: {
    backgroundColor: 'gold',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    left: 35,
    borderWidth: 2,
    borderColor: 'black',
  },
  levelText: {
    color: 'black',
    fontWeight: 'bold',
  },
  notificationBadge: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  notificationText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default CharacterCard;