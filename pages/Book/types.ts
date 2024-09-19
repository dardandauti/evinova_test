import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type TBook = NativeStackScreenProps<RootStackParamList, 'Book'>;

export type TBookRoute = TBook['route'];

export interface IBookDetail {}
