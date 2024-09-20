export type RootStackParamList = {
  Home: undefined;
  Book: {
    bookID: string;
    bookAuthor: string;
    bookRating: { nrOfRatings: number; avrgRating: number };
  };
};
