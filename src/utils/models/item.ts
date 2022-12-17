import Album from "./albumItem";
import Artist from "./artistItem";
import CoreItem from "./coreItem";
import { TypeItem } from "./itemType";


export type ImagesType = {
   image : string
   imageS: string
   imageM: string
   imageL: string
   imageXl: string
}

class Item extends CoreItem {
   images;
   genreId;
   nbTracks;
   trackList;
   artist;
   album;
   duration;
   preview;
   name; 
   nbAlbum; 
   nbFan;

   constructor(
      id: string,
      type: TypeItem,
      title: string,
      link: string,
      duration?: number,
      preview?: string,
      album?: Album,
      artist?: Artist,
      images?: ImagesType,
      genreId?: number,
      nbTracks?: number,
      trackList?: string,
      name?: string,
      nbAlbum?: number,
      nbFan?: number,
   ) {
      super(id, link, title, type);
      this.duration = duration;
      this.preview = preview;
      this.album = album;
      this.artist = artist;
      this.genreId = genreId;
      this.nbTracks = nbTracks;
      this.trackList = trackList;
      this.name = name;
      this.nbAlbum = nbAlbum;
      this.nbFan = nbFan;
      this.images = images
      // this.images = {
      //    image: cover,
      //    imageL: coverL,
      //    imageM: coverM,
      //    imageS: coverS,
      //    imageXl: coverXl
      // }
   }

}

export default Item;