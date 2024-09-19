import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TBook } from '../../App';
type TBookRoute = TBook['route'];

export const Book = ({ route }: { route: TBookRoute }) => {
  const { bookID } = route.params;

  return (
    <View>
      <Text>{bookID}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
