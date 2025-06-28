import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Users, Wifi } from 'lucide-react-native';

interface ServerInfoProps {
  serverName: string;
  onlineCount: number;
  playerLevel: number;
}

export function ServerInfo({ serverName, onlineCount, playerLevel }: ServerInfoProps) {
  return (
    <Animated.View 
      style={styles.container}
      entering={FadeInUp.duration(600)}
    >
      <LinearGradient
        colors={['rgba(40, 40, 40, 0.8)', 'rgba(20, 20, 20, 0.9)']}
        style={styles.infoBar}
      >
        <View style={styles.serverInfo}>
          <Wifi size={16} color="#44CC44" />
          <Text style={styles.serverText}>{serverName}</Text>
          <Text style={styles.separator}>•</Text>
          <Users size={16} color="#4488FF" />
          <Text style={styles.onlineText}>{onlineCount} Online</Text>
        </View>
      </LinearGradient>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  infoBar: {
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.2)',
  },
  serverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  serverText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  separator: {
    color: '#666666',
    fontSize: 14,
  },
  onlineText: {
    color: '#4488FF',
    fontSize: 14,
    fontWeight: '600',
  },
});