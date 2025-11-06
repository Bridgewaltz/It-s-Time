import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Clock({ style }) {
  return (
    <Image
      source={require('../../../assets/images/clock.png')}
      style={[styles.image, style]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    // Ensure image renders with proper dimensions
  },
});

