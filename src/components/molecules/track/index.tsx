
import Item from "@/utils/models/item";
import View from "./view";

export type TrackProps = {
  item: Item;
};

const Track = (props: TrackProps) => {
  return <View {...props} />;
};

export default Track;
