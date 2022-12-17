import { ImagesType } from "./item";
import Item, { TypeItem } from "./itemType";

class Album extends Item {
  title;
  trackList;
  constructor(
    id: string,
    type: TypeItem,
    title: string,
    trackList: string,
    images: ImagesType
  ) {
    super(id, type, images);
    this.title = title;
    this.trackList = trackList
  }
}

export default Album;
