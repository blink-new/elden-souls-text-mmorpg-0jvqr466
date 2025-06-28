
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const CharacterCard = () => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png' }}
        style={styles.avatar}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Tarnished One</Text>
        <Text style={styles.details}>Human Astrologer - Liurnia of the Lakes</Text>
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
  details: {
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
