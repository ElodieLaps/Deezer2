import Artist from "../models/artistItem";

export const createArtist = (artist: any) => {
  const {
    id: artistId,
    link: artistLink,
    name,
    picture,
    picture_big,
    picture_medium,
    picture_small,
    picture_xl,
    tracklist: artistTrackList,
    type: artistType,
  } = artist;

  const images = {
    image: picture ?? "",
    imageS: picture_small ?? "",
    imageM: picture_medium ?? "",
    imageL: picture_big ?? "",
    imageXl: picture_xl ?? "",
  };

  return new Artist(
    artistId,
    artistType,
    name,
    artistLink,
    artistTrackList,
    images
  );
};
