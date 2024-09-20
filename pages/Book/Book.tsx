import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { IBookDetail, TBookRoute } from './types';
import axios from 'axios';

export const Book = ({ route }: { route: TBookRoute }) => {
  const { bookID, bookAuthor, bookRating } = route.params;
  const avrgRating = bookRating.avrgRating;
  const nrOfRatings = bookRating.nrOfRatings;

  const [isLoading, setIsLoading] = useState(false);
  const [bookDetails, setBookDetails] = useState<IBookDetail>();

  useEffect(() => {
    setIsLoading(true);
    axios(`${bookID}.json`)
      .then(res => setBookDetails(res.data))
      .catch(e => Alert.alert('Error: ', e.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ScrollView style={styles.root}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        bookDetails && (
          <View style={styles.bookInfo}>
            <View style={styles.headingLayout}>
              <View>
                <Text style={styles.title}>{bookDetails.title}</Text>
                <Text style={styles.subtitle}>{bookDetails.subtitle}</Text>
                <Text style={styles.subtitle}>{bookAuthor}</Text>
              </View>
              <View>
                <Text>
                  {avrgRating?.toFixed(2)}
                  {nrOfRatings && ` (${nrOfRatings})`}
                </Text>
              </View>
            </View>

            <Text style={styles.description}>
              {bookDetails.description?.value ??
                'There is no description available...'}
            </Text>
          </View>
        )
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: { padding: 32 },
  bookInfo: {
    gap: 16,
  },
  headingLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
  description: {},
});
