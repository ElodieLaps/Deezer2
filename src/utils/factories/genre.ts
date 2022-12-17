import Genre from "../models/genre";

export const createGenre = (genre: any) => {
  const {
    id: genreId,
    name,
    picture,
    picture_big,
    picture_medium,
    picture_small,
    picture_xl,
    type: genreType,
  } = genre;

  const images = {
    image: picture ?? "",
    imageS: picture_small ?? "",
    imageM: picture_medium ?? "",
    imageL: picture_big ?? "",
    imageXl: picture_xl ?? "",
  };

  return new Genre(genreId, name, genreType, images);
};
