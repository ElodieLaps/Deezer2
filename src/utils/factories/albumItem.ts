import Album from "../models/albumItem";

export const createAlbum = (album: any) => {
  const {
    cover,
    cover_big,
    cover_medium,
    cover_small,
    cover_xl,
    id: albumId,
    title: albumTitle,
    tracklist: albumTrackList,
    type: albumType,
  } = album;

  const images = {
    image: cover ?? "",
    imageS: cover_small ?? "",
    imageM: cover_medium ?? "",
    imageL: cover_big ?? "",
    imageXl: cover_xl ?? "",
  };

  return new Album(
    albumId,
    albumType,
    albumTitle,
    albumTrackList,
   images
  );
};
