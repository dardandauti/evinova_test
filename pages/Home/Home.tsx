import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { ResultsList } from './Components/ResultsList';
import { THomeNavigation, ISearchResult } from './types';

export const Home = ({ navigation }: { navigation: THomeNavigation }) => {
  const [searchResults, setSearchResults] = useState<{
    numberOfResults: number | undefined;
    results: ISearchResult[];
  }>({
    numberOfResults: undefined,
    results: [],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [searchString, setSearchString] = useState('');

  async function getSearchedBooks(searchParams: string) {
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
      .catch(e => Alert.alert('Error: ', e.message));
  }

  return (
    <View style={styles.root}>
      <Text>Search for books!</Text>
      <View style={styles.searchField}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          onChange={e => setSearchString(e.nativeEvent.text)}
          onEndEditing={e => getSearchedBooks(e.nativeEvent.text)}
        />
        <Button title="Search" onPress={() => getSearchedBooks(searchString)} />
      </View>

      {isLoading ? (
        <Text>Searching...</Text>
      ) : searchResults.numberOfResults ===
        undefined ? null : searchResults.numberOfResults === 0 ? (
        <Text>No results found...</Text>
      ) : (
        <>
          <Text>{searchResults.numberOfResults} results found:</Text>
          <ResultsList
            resultsData={searchResults.results}
            navigation={navigation}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: { padding: 32, alignItems: 'center', gap: 8 },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#333333',
    padding: 10,
  },
  searchField: {
    gap: 8,
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
