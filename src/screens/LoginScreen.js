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
  },
  clock: {
    position: 'absolute',
    // TODO: Adjust positioning to match final_edited.png
    // Add top, left, width, height values here
  },
  monkey: {
    position: 'absolute',
    // TODO: Adjust positioning to match final_edited.png
    // Add top, left/right, width, height values here
  },
  title: {
    position: 'absolute',
    // TODO: Adjust positioning to match final_edited.png
    // Add top, left, width, height values here
    // Example: { top: 200, left: '50%', marginLeft: -100, width: 200, height: 60 }
  },
  subtitle: {
    position: 'absolute',
    // TODO: Adjust positioning to match final_edited.png
    // Add top, left, width, height values here
    // Example: { top: 270, left: '50%', marginLeft: -80, width: 160, height: 40 }
  },
  continueButton: {
    position: 'absolute',
    // TODO: Adjust positioning to match final_edited.png
    // Add bottom/top, left, width, height values here
    // Example: { bottom: 100, left: '50%', marginLeft: -100, width: 200, height: 60 }
  },
});
