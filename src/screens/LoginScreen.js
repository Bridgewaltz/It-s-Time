import React from 'react';
import { View, StyleSheet } from 'react-native';
import VaultBackground from '../components/login/VaultBackground';
import Clock from '../components/login/Clock';
import Monkey from '../components/login/Monkey';
import TitleText from '../components/login/TitleText';
import SubtitleText from '../components/login/SubtitleText';
import ContinueButton from '../components/login/ContinueButton';

export default function Login() {
  const handleContinue = () => {
    // TODO: Add navigation or login logic here
    console.log('Continue button pressed');
  };

  return (
    <View style={styles.container}>
      <VaultBackground />
      
      {/* All elements positioned to match final_edited.png */}
      <View style={styles.content}>
        <Clock style={styles.clock} />
        <Monkey style={styles.monkey} />
        <TitleText style={styles.title} />
        <SubtitleText style={styles.subtitle} />
        <ContinueButton 
          onPress={handleContinue} 
          style={styles.continueButton} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    flex: 1,
    position: 'relative',
    zIndex: 1,
  },
  clock: {
    position: 'absolute',
    top: 60,
    left: 25,
    width: 130,
    height: 130,
  },
  monkey: {
    position: 'absolute',
    top: 50,
    right: 20,
    width: 180,
    height: 180,
  },
  title: {
    position: 'absolute',
    top: '48%',
    left: '50%',
    marginLeft: -110,
    width: 220,
    height: 75,
  },
  subtitle: {
    position: 'absolute',
    top: '56%',
    left: '50%',
    marginLeft: -85,
    width: 170,
    height: 30,
  },
  continueButton: {
    position: 'absolute',
    bottom: 140,
    left: '50%',
    marginLeft: -95,
    width: 190,
    height: 48,
  },
});
