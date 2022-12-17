import Item from "@/utils/models/item";
import View from "./view";

 export type ArtistProps = {
    item: Item;
 }

const Artist = (props: ArtistProps) => {
    return (
        <View {...props} />
    )
}

export default Artist;