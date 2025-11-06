import React from 'react';
import { Pressable, Text } from 'react-native';
import { colors, spacing, radii } from '../constants/theme';

export default function OutlineButton({ title, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        flex: 1,
        borderColor: colors.border,
        borderWidth: 1,
        borderRadius: radii.md,
        paddingVertical: spacing(1.25),
        alignItems: 'center',
        backgroundColor: pressed ? "#141418" : "transparent",
      })}
    >
      <Text style={{ color: colors.text, fontWeight: "600" }}>{title}</Text>
    </Pressable>
  );
}


