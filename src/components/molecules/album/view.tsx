import ItemCard from "@/components/atoms/itemCard";
import { SearchTypeEnum } from "@/utils/api/search";
import { AlbumProps } from ".";
import styles from "./styles.module.scss";
import Image from "next/image";

type ViewProps = AlbumProps;

const View = (props: ViewProps) => {
  const { item: album } = props;

  const image = (
    <div>
      {album?.images?.imageM && (
        <Image
          // loader={myLoader}
          src={album?.images?.imageM}
          alt={album.title}
          width={100}
          height={100}
        />
      )}
    </div>
  );

  const text = (
    <div className={styles.text}>
      <p className={styles.text__track}>{album.title}</p>
      {album?.artist && (
        <p className={styles.text__artist}>{album?.artist.name}</p>
      )}
      {album?.album && (
        <p className={styles.text__album}>{album?.album.title}</p>
      )}
    </div>
  );

  const itemCardProps = {
    image,
    text,
    type: album.type as SearchTypeEnum,
  };

  return <ItemCard {...itemCardProps} />;
};

export default View;
