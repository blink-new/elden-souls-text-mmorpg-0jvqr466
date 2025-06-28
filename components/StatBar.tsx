
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface StatBarProps {
  label: string;
  value: number;
  maxValue: number;
  color: string;
}

const StatBar: React.FC<StatBarProps> = ({ label, value, maxValue, color }) => {
  const percentage = (value / maxValue) * 100;

  return (
    <View style={styles.container}>
        <View style={styles.barContainer}>
            <View style={[styles.bar, { width: `${percentage}%`, backgroundColor: color }]} />
        </View>
        <Text style={styles.text}>{`${value}/${maxValue}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  barContainer: {
    flex: 1,
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 5,
    marginRight: 10,
  },
  bar: {
    height: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});

export default StatBar;
