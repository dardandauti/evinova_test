import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ISearchResult, THomeNavigation } from '../types';

const ResultItem = ({
  searchResult,
  navigation,
}: {
  searchResult: ISearchResult;
  navigation: THomeNavigation;
}) => {
  return (
    <TouchableOpacity
      key={searchResult.bookKey}
      style={styles.searchItem}
      onPress={() =>
        navigation.navigate('Book', {
          bookID: searchResult.bookKey,
          bookAuthor: searchResult.bookAuthor,
          bookRating: {
            nrOfRatings: searchResult.nrOfRatings,
            avrgRating: searchResult.avrgRating,
          },
        })
      }>
      <View style={styles.gridItem}>
        <Text style={styles.title}>{searchResult.bookTitle}</Text>
        <Text style={styles.author}>{searchResult.bookAuthor}</Text>
        {searchResult.publishedYear && (
          <Text style={styles.publishedYear}>
            {Math.max(...searchResult.publishedYear)}
          </Text>
        )}
      </View>
      <View>
        <Text>
          {searchResult.avrgRating?.toFixed(2)}
          {searchResult.nrOfRatings && ` (${searchResult.nrOfRatings})`}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export const ResultsList = ({
  resultsData,
  navigation,
}: {
  resultsData: ISearchResult[];
  navigation: THomeNavigation;
}) => {
  return (
    <ScrollView style={styles.root}>
      {resultsData &&
        resultsData.map(result => (
          <ResultItem searchResult={result} navigation={navigation} />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    maxWidth: '100%',
  },
  gridItem: {
    flexWrap: 'wrap',
  },
  searchItem: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  author: {
    fontSize: 16,
  },
  publishedYear: {
    fontSize: 14,
    color: '#9d9d9d',
  },
});
