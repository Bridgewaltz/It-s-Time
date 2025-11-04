import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { colors, spacing, radii } from '../constants/theme';

export default function Field({ label, ...rest }) {
  return (
    <View style={{ gap: 8 }}>
      <Text style={{ color: colors.sub, fontSize: 12 }}>{label}</Text>
      <TextInput
        placeholder={label}
        placeholderTextColor="#666873"
        style={{
          color: colors.text,
          backgroundColor: "#111114",
          borderColor: colors.border,
          borderWidth: 1,
          borderRadius: radii.md,
          paddingHorizontal: spacing(1.5),
          paddingVertical: spacing(1.25),
        }}
        {...rest}
      />
    </View>
  );
}

