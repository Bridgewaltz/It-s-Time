import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function SubtitleText({ style }) {
  return (
    <Image
      source={require('../../../assets/images/subtitle-text-final.png')}
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

