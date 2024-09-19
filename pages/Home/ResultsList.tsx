import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { THomeNavigation } from './Home';

export interface ISearchResult {
  bookKey: string; //           key
  bookTitle: string; //         title
  bookAuthor: string; //        author_name
  avrgRating: number; //        ratings_average: 4.521739,
  nrOfRatings: number; //       ratings_count: 23
  publishedYear: number[]; //   publish_year
}

const ResultItem = ({
  searchResult,
  navigation,
}: {
  searchResult: ISearchResult;
  navigation: THomeNavigation;
}) => {
  return (
    <TouchableOpacity
      style={styles.searchItem}
      onPress={() =>
        navigation.navigate('Book', { bookID: searchResult.bookKey })
      }>
      <Text>{searchResult.bookTitle}</Text>
      <Text>{searchResult.bookAuthor}</Text>
      {searchResult.publishedYear && (
        <Text>{Math.max(...searchResult.publishedYear)}</Text>
      )}
    </TouchableOpacity>
  );
};

export const ResultsList = ({
  resultsData,
  navigation,
}: {
  resultsData: { numberOfResults: number; results: ISearchResult[] };
  navigation: THomeNavigation;
}) => {
  return (
    <ScrollView>
      <Text>{`Results: ${resultsData?.numberOfResults}`}</Text>
      {/* Kanske ska behå¨llas i föräldern så den inte skrollas bort */}
      {resultsData &&
        resultsData.results.map(result => (
          <ResultItem searchResult={result} navigation={navigation} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchItem: {
    paddingTop: 16,
  },
});
