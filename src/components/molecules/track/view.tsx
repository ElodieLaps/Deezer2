import ItemCard from "@/components/atoms/itemCard";
import { SearchTypeEnum } from "@/utils/api/search";
import convertSecondsToHms from "@/utils/helpers/duration";
import Image from "next/image";
import { TrackProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = TrackProps;

const View = (props: ViewProps) => {
  const { item: track } = props;

  const image = (
    <div className={styles.track__image}>
      {track.album?.images?.imageM && (
        <Image
          // loader={myLoader}
          src={track?.album?.images?.imageM}
          alt={track.title}
          width={100}
          height={100}
        />
      )}
    </div>
  );

  const text = (
    <div className={styles.text}>
      <p className={styles.text__track}>{track.title}</p>
      {track?.artist && (
        <p className={styles.text__artist}>{track.artist.name}</p>
      )}
      {track?.album && (
        <p className={styles.text__album}>{track.album.title}</p>
      )}
    </div>
  );

  const footer = (
    <>
      {track.duration && (
        <div className={styles.track__duration}>
          {convertSecondsToHms(track.duration)}
        </div>
      )}
      <audio className={styles.audio} controls>
        <source src={track.preview} type="audio/ogg" />
        <source src={track.preview} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </>
  );

  const itemCardProps = {
    image,
    text,
    type: track.type as SearchTypeEnum,
    footer,
  };

  return <ItemCard {...itemCardProps} />;
};

export default View;
