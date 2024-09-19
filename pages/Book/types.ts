import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type TBook = NativeStackScreenProps<RootStackParamList, 'Book'>;

export type TBookRoute = TBook['route'];

export interface IBookDetail {
  title: string;
  subtitle: string;
  description: { value: string; type: string };
}
