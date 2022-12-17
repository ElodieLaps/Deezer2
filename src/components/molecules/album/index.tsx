import Item from "@/utils/models/item";
import View from "./view";

export type AlbumProps = {
  item: Item;
};

const Album = (props: AlbumProps) => {
  return <View {...props} />;
};

export default Album;
