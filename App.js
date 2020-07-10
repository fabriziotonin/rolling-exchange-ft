import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/constants/colors';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenido a Rolling exchange</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: colors.text,
  }
});

