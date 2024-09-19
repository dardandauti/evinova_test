import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

export const Home = () => {
  return (
    <View style={styles.root}>
      <Text>Search for books!</Text>
      <TextInput style={styles.input} placeholder="Type here..." />
    </View>
  );
};

const styles = StyleSheet.create({
  root: { padding: 32, alignItems: 'center', gap: 8 },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#333333',
    padding: 10,
  },
});
