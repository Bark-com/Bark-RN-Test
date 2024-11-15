import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Bark Technical Test</Text>
      <View style={styles.spacer} />
      <Text>To fetch users you should use this URL:</Text>
      <Text>https://randomuser.me/api/</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spacer: {
    height: 20,
  },
});
