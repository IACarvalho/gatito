import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native'
import Servicos from './src/screens/Servicos';

export default function App() {
  return (
    <View>
      <Servicos />
      <StatusBar style="auto" />
    </View>
  );
}