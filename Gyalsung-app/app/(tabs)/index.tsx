import { View, Text } from 'react-native';
import React from 'react';
import { COLORS } from '@/constants/colors';

export default function index() {
  return (
    <View style={{backgroundColor: COLORS.background}}>
      <Text style={{ color: COLORS.primary, fontWeight: "600" }}>index</Text>
    </View>
  )
}