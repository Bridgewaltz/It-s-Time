import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function TitleText({ style }) {
  return (
    <Image
      source={require('../../../assets/images/title-text.png')}
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

