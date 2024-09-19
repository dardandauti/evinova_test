import { Alert, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { ISearchResult, ResultsList } from './ResultsList';
import { THome } from '../../App';

export type THomeNavigation = THome['navigation'];

export const Home = ({ navigation }: { navigation: THomeNavigation }) => {
  const [searchResults, setSearchResults] = useState<{
    numberOfResults: number;
    results: ISearchResult[];
  }>({
    numberOfResults: 0,
    results: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  function getSearchedBooks(searchParams: string) {
    setIsLoading(true);
    axios('search.json', {
      params: {
        q: searchParams,
      },
    })
      .then(res =>
        setSearchResults({
          numberOfResults: res.data.numFound,
          results: res.data.docs.map((item: any) => ({
            bookKey: item.key,
            bookAuthor: item.author_name,
            bookTitle: item.title,
            avrgRating: item.ratings_average,
            nrOfRatings: item.ratings_count,
            publishedYear: item.publish_year,
          })),
        }),
      )
      .finally(() => setIsLoading(false))
      .catch(e => Alert.alert(e));
  }

  return (
    <View style={styles.root}>
      <Text>Search for books!</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        onEndEditing={e => getSearchedBooks(e.nativeEvent.text)}
      />
      <Text>{isLoading.toString()}</Text>
      <ResultsList resultsData={searchResults} navigation={navigation} />
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
