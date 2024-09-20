import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type THome = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type THomeNavigation = THome['navigation'];

export interface ISearchResult {
  bookKey: string; //           key
  bookTitle: string; //         title
  bookAuthor: string; //        author_name
  avrgRating: number; //        ratings_average: 4.521739,
  nrOfRatings: number; //       ratings_count: 23
  publishedYear: number[]; //   publish_year
}

export interface IPickedRequestProperties {
  key: string;
  author_name: string;
  title: string;
  ratings_average: number;
  ratings_count: number;
  publish_year: number[];
}
