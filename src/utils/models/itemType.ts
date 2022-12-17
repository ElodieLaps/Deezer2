import { ImagesType } from "./item";

export type TypeItem = "track" | "album" | "artist";

class Item {
  id;
  type;
  images;
  constructor(
    id?: string,
    type?: TypeItem,
    images?: ImagesType,
  ) {
    this.id = id;
    this.type = type;
    this.images = images
  }
}

export default Item;
