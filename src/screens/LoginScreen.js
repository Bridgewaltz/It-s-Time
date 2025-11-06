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
    top: 100,
    left: 50,
    width: 150,
    height: 150,
  },
  monkey: {
    position: 'absolute',
    top: 150,
    right: 30,
    width: 200,
    height: 200,
  },
  title: {
    position: 'absolute',
    top: '35%',
    left: '50%',
    marginLeft: -100,
    width: 200,
    height: 80,
  },
  subtitle: {
    position: 'absolute',
    top: '45%',
    left: '50%',
    marginLeft: -120,
    width: 240,
    height: 50,
  },
  continueButton: {
    position: 'absolute',
    bottom: 80,
    left: '50%',
    marginLeft: -120,
    width: 240,
    height: 60,
  },
});
