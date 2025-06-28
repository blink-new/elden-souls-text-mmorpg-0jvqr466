import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { FadeInUp } from 'react-native-reanimated';
import { Save, Settings, RotateCcw } from 'lucide-react-native';

interface ActionButtonsProps {
  difficulty: string;
  autoSave: boolean;
  onSave: () => void;
  onSettings: () => void;
  onToggleAutoSave: () => void;
}

export function ActionButtons({ 
  difficulty, 
  autoSave, 
  onSave, 
  onSettings, 
  onToggleAutoSave 
}: ActionButtonsProps) {
  return (
    <Animated.View 
      style={styles.container}
      entering={FadeInUp.delay(300).duration(500)}
    >
      <View style={styles.buttonRow}>
        {/* Save Button */}
        <TouchableOpacity onPress={onSave} style={styles.actionButton}>
          <LinearGradient
            colors={['rgba(68, 204, 68, 0.8)', 'rgba(34, 153, 34, 0.9)']}
            style={styles.buttonGradient}
          >
            <Save size={16} color="#FFFFFF" />
            <Text style={styles.buttonText}>Save</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Difficulty Display */}
        <View style={styles.infoButton}>
          <LinearGradient
            colors={['rgba(60, 60, 60, 0.8)', 'rgba(30, 30, 30, 0.9)']}
            style={styles.buttonGradient}
          >
            <Settings size={16} color="#FFD700" />
            <Text style={styles.buttonText}>Difficulty: {difficulty}</Text>
          </LinearGradient>
        </View>

        {/* Auto-Save Toggle */}
        <TouchableOpacity onPress={onToggleAutoSave} style={styles.actionButton}>
          <LinearGradient
            colors={autoSave 
              ? ['rgba(255, 215, 0, 0.8)', 'rgba(255, 165, 0, 0.9)']
              : ['rgba(60, 60, 60, 0.8)', 'rgba(30, 30, 30, 0.9)']
            }
            style={styles.buttonGradient}
          >
            <RotateCcw size={16} color="#FFFFFF" />
            <Text style={styles.buttonText}>Auto-Save</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    flex: 1,
  },
  infoButton: {
    flex: 1.2,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.3)',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});