import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

export interface ISearchResult {
  bookTitle: string; // title
  bookAuthor: string; // author_name
  avrgRating: number; //    "ratings_average": 4.521739,
  nrOfRatings: number; //  "ratings_count": 23,
  publishedYear: number[]; // publish_year
}
const ResultItem = ({ searchResult }: { searchResult: ISearchResult }) => {
  return (
    <TouchableOpacity>
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
}: {
  resultsData: { numberOfResults: number; results: ISearchResult[] };
}) => {
  return (
    <ScrollView>
      <Text>{`Results: ${resultsData?.numberOfResults}`}</Text>
      {resultsData &&
        resultsData.results.map(result => <ResultItem searchResult={result} />)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});
