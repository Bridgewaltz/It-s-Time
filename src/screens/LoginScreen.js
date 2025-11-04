import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Animated,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Haptics from 'expo-haptics';
import { colors, spacing, radii } from '../constants/theme';
import Field from '../components/Field';
import OutlineButton from '../components/OutlineButton';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [error, setError] = useState(null);
  const glow = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(glow, {
          toValue: 1,
          duration: 800,
          useNativeDriver: false,
        }),
        Animated.timing(glow, {
          toValue: 0.6,
          duration: 800,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, [glow]);

  const onSubmit = async () => {
    setError(null);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (!email || !pwd) {
      setError('Enter email and password');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      return;
    }
    try {
      // TODO: replace with real auth
      await new Promise((r) => setTimeout(r, 600));
      // Navigation will be handled by navigator
    } catch (e) {
      setError('Login failed. Try again.');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
  };

  const glowSize = glow.interpolate({
    inputRange: [0.6, 1],
    outputRange: [140, 180],
  });
  const glowOpacity = glow.interpolate({
    inputRange: [0.6, 1],
    outputRange: [0.35, 0.6],
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: colors.bg }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: spacing(2),
          justifyContent: 'center',
        }}
      >
        {/* Logo cluster */}
        <View style={{ alignItems: 'center', marginBottom: spacing(3) }}>
          <View style={{ position: 'absolute' }}>
            <Animated.View
              style={{
                width: glowSize,
                height: glowSize,
                borderRadius: 999,
                backgroundColor: colors.glow,
                opacity: glowOpacity,
              }}
            />
          </View>
          <Image
            source={require('../../assets/images/its-time-logo.png.webp')}
            style={{ width: 132, height: 132, resizeMode: 'contain' }}
          />
        </View>

        {/* Title */}
        <View style={{ alignItems: 'center', marginBottom: spacing(2) }}>
          <Text style={{ color: colors.text, fontSize: 28, fontWeight: '800' }}>
            It's Time
          </Text>
          <Text style={{ color: colors.sub, marginTop: 6 }}>
            Get in. Get signals.
          </Text>
        </View>

        {/* Card */}
        <View
          style={{
            backgroundColor: colors.card,
            borderRadius: radii.lg,
            padding: spacing(2),
            borderWidth: 1,
            borderColor: colors.border,
            gap: spacing(1.5),
          }}
        >
          <Field
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <Field
            label="Password"
            value={pwd}
            onChangeText={setPwd}
            secureTextEntry
          />

          {error ? (
            <Text style={{ color: colors.error, marginTop: 6 }}>{error}</Text>
          ) : null}

          <Pressable
            onPress={onSubmit}
            style={({ pressed }) => ({
              marginTop: spacing(1),
              backgroundColor: colors.primary,
              borderRadius: radii.md,
              paddingVertical: spacing(1.75),
              alignItems: 'center',
              transform: [{ scale: pressed ? 0.98 : 1 }],
              shadowColor: colors.primary,
              shadowOpacity: 0.35,
              shadowRadius: 12,
              shadowOffset: { width: 0, height: 8 },
            })}
          >
            <Text
              style={{
                color: '#0E0E10',
                fontWeight: '700',
                letterSpacing: 0.5,
              }}
            >
              Continue
            </Text>
          </Pressable>

          {/* Alt providers (optional) */}
          <View
            style={{
              flexDirection: 'row',
              gap: spacing(1),
              marginTop: spacing(1),
            }}
          >
            <OutlineButton
              title="Apple"
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
            />
            <OutlineButton
              title="Google"
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
            />
          </View>
        </View>

        {/* Footer */}
        <View style={{ alignItems: 'center', marginTop: spacing(2) }}>
          <Text style={{ color: colors.sub }}>
            New here?{' '}
            <Text style={{ color: colors.lime, fontWeight: '700' }}>
              Create account
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

