import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function VaultBackground({ style }) {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={require('../../../assets/images/vault-bg.png')}
        style={styles.image}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

