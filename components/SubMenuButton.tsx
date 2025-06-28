
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface SubMenuButtonProps {
  text: string;
  onPress: () => void;
}

const SubMenuButton: React.FC<SubMenuButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 2,
  },
  text: {
    color: 'white',
    fontSize: 14,
  },
});

export default SubMenuButton;
