import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { TBook } from '../../App';
import axios from 'axios';

type TBookRoute = TBook['route'];

export const Book = ({ route }: { route: TBookRoute }) => {
  const { bookID } = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState<any>();

  useEffect(() => {
    setIsLoading(true);
    axios(`${bookID}.json`)
      .then(res => setBookDetails(res.data))
      .finally(() => setIsLoading(false))
      .catch(e => Alert.alert(e));
  }, []);

  return (
    <ScrollView style={styles.root}>
      <Text>{isLoading.toString()}</Text>
      {bookDetails && (
        <>
          <Text>{bookDetails.title}</Text>
          <Text>{bookDetails.subtitle}</Text>
          <Text>
            {bookDetails.description?.value ??
              'There is no description available...'}
          </Text>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: { padding: 32, gap: 8 },
});
