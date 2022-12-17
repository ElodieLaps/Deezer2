import Item from "../models/item";
import { createAlbum } from "./albumItem";
import { createArtist } from "./artistItem";

export const createItem = (item: any): Item => {
  const {
    id,
    type,
    title,
    link,
    duration,
    preview,
    cover,
    cover_small,
    cover_medium,
    cover_big,
    cover_xl,
    genre_id,
    nb_tracks,
    name,
    nb_album,
    nb_fan,
    picture,
    picture_small,
    picture_medium,
    picture_big,
    picture_xl,
    tracklist,
  } = item;

  const images = {
    image: cover ?? picture ?? "",
    imageS: cover_small ?? picture_small ?? "",
    imageM: cover_medium ?? picture_medium ?? "",
    imageL: cover_big ?? picture_big ?? "",
    imageXl: cover_xl ?? picture_xl ?? "",
  };

  const album = item?.album ? createAlbum(item.album) : undefined;
  const artist = item?.artist ? createArtist(item.artist) : undefined;

  return new Item(
    id,
    type,
    title,
    link,
    duration,
    preview,
    album,
    artist,
    images,
    genre_id,
    nb_tracks,
    tracklist,
    name,
    nb_album,
    nb_fan
  );
};
