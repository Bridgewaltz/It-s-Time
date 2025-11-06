import React from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function ContinueButton({ onPress, style }) {
  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (onPress) {
      onPress();
    }
  };

  return (
    <Pressable onPress={handlePress} style={({ pressed }) => [
      styles.container,
      pressed && styles.pressed,
      style
    ]}>
      <Image
        source={require('../../../assets/images/continue-button.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    // Base styles - positioning will be handled by parent via style prop
  },
  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

