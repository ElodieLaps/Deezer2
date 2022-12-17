import { ImagesType } from "./item";
import Item, { TypeItem } from "./itemType";

class Genre extends Item {
  name;
  constructor(
    id: string,
    name: string,
    type: TypeItem,
    images: ImagesType
  ) {
    super(id, type, images);
    this.name = name;
  }
}

export default Genre;
