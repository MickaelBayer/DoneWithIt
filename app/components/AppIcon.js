import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function AppIcon({
  name,
  size = 40,
  color = '#fff',
  backgroundColor = '#000'
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {}
});
