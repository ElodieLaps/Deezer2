import { ImagesType } from "./item";
import Item, { TypeItem } from "./itemType";

class Artist extends Item {
  name;
  link;
  trackList;
  constructor(
    id: string,
    type: TypeItem,
    name: string,
    link: string,
    trackList: string,
    images: ImagesType
  ) {
    super(id, type, images);
    this.name = name;
    this.link = link;
    this.trackList = trackList
  }
}

export default Artist;
