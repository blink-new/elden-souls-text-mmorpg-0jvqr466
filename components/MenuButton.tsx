
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native';

interface MenuButtonProps {
  text: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

const MenuButton: React.FC<MenuButtonProps> = ({ text, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => setIsOpen(!isOpen)}>
        <View style={styles.leftContainer}>
          {icon}
          <Text style={styles.text}>{text}</Text>
        </View>
        {isOpen ? <ChevronUp color="gold" /> : <ChevronDown color="gold" />}
      </TouchableOpacity>
      {isOpen && <View style={styles.subMenuContainer}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  text: {
    color: 'gold',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  subMenuContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default MenuButton;
