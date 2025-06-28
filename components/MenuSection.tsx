import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { 
  FadeInDown, 
  useSharedValue, 
  useAnimatedStyle, 
  withTiming,
  interpolate
} from 'react-native-reanimated';
import { ChevronDown, LucideIcon } from 'lucide-react-native';

interface MenuSectionProps {
  title: string;
  icon: LucideIcon;
  index: number;
  onPress?: () => void;
  isExpandable?: boolean;
  children?: React.ReactNode;
}

export function MenuSection({ 
  title, 
  icon: Icon, 
  index, 
  onPress, 
  isExpandable = false,
  children 
}: MenuSectionProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const rotation = useSharedValue(0);
  const height = useSharedValue(0);

  const animatedChevronStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    };
  });

  const animatedContentStyle = useAnimatedStyle(() => {
    return {
      height: height.value,
      opacity: interpolate(height.value, [0, 100], [0, 1]),
    };
  });

  const handlePress = () => {
    if (isExpandable) {
      const newExpanded = !isExpanded;
      setIsExpanded(newExpanded);
      
      rotation.value = withTiming(newExpanded ? 180 : 0, { duration: 300 });
      height.value = withTiming(newExpanded ? 100 : 0, { duration: 300 });
    }
    
    onPress?.();
  };

  return (
    <Animated.View 
      style={styles.container}
      entering={FadeInDown.delay(index * 100).duration(500)}
    >
      <Pressable
        onPress={handlePress}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed
        ]}
      >
        <LinearGradient
          colors={['rgba(60, 60, 60, 0.9)', 'rgba(30, 30, 30, 0.95)']}
          style={styles.menuItem}
        >
          <View style={styles.content}>
            <View style={styles.leftContent}>
              <View style={styles.iconContainer}>
                <Icon size={24} color="#FFD700" />
              </View>
              <Text style={styles.title}>{title}</Text>
            </View>
            
            {isExpandable && (
              <Animated.View style={[animatedChevronStyle]}>
                <ChevronDown size={20} color="#CCCCCC" />
              </Animated.View>
            )}
          </View>
        </LinearGradient>
      </Pressable>
      
      {isExpandable && children && (
        <Animated.View style={[styles.expandedContent, animatedContentStyle]}>
          {children}
        </Animated.View>
      )}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 4,
  },
  pressable: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  menuItem: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 215, 0, 0.2)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    marginRight: 16,
    width: 32,
    alignItems: 'center',
  },
  title: {
    color: '#FFD700',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  expandedContent: {
    backgroundColor: 'rgba(20, 20, 20, 0.9)',
    borderRadius: 8,
    marginTop: 4,
    marginHorizontal: 8,
    padding: 16,
    overflow: 'hidden',
  },
});