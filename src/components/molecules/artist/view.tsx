import { ArtistProps } from ".";
import Image from "next/image";
import styles from "./styles.module.scss";
import { SearchTypeEnum } from "@/utils/api/search";
import ItemCard from "@/components/atoms/itemCard";

type ViewProps = ArtistProps;

const View = (props: ViewProps) => {
    const { item: artist } = props;

    const image = (
        <div>
          {artist?.images?.imageM && (
            <Image
              // loader={myLoader}
              src={artist?.images?.imageM}
              alt={artist.title}
              width={100}
              height={100}
            />
          )}
        </div>
      );

      const text = (
        <div className={styles.text}>
          {artist?.name && <p className={styles.text__track}>{artist.name}</p>}
        </div>
      );

      const itemCardProps = {
        image,
        text,
        type: artist.type as SearchTypeEnum,
      };

      return <ItemCard {...itemCardProps} />;
}

export default View;