
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Save, Settings2, CheckSquare } from 'lucide-react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.serverInfo}>
        <View style={styles.onlineDot} />
        <Text style={styles.serverText}>Limgrave-PVE-01 - 1247 Online</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Save color="white" size={20} />
          <Text style={styles.actionText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Settings2 color="white" size={20} />
          <Text style={styles.actionText}>Difficulty: Normal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <CheckSquare color="white" size={20} />
          <Text style={styles.actionText}>Auto-Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.2)',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  serverInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  onlineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'green',
    marginRight: 10,
  },
  serverText: {
    color: 'white',
    fontSize: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 12,
  },
});

export default Footer;
