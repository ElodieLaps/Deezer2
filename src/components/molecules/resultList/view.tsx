import Album from "@/components/molecules/album";
import Artist from "@/components/molecules/artist";
import Track from "@/components/molecules/track";
import { SearchTypeEnum } from "@/utils/api/search";
import Item from "@/utils/models/item";
import { ResultListProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = ResultListProps;

const View = (props: ViewProps) => {
  const { data } = props;

  return (
    <div className={styles.container}>
      {data.map((item: Item) => {
        switch (item.type) {
          case SearchTypeEnum.track: {
            const trackProps = { item };
            return <Track key={item.id} {...trackProps} />;
          }
          case SearchTypeEnum.album: {
            const albumProps = { item };
            return <Album key={item.id} {...albumProps} />;
          }
          case SearchTypeEnum.artist: {
            const artistProps = { item };
            return <Artist key={item.id} {...artistProps} />;
          }
          default: {
            return <div>tout pété !</div>;
          }
        }
      })}
    </div>
  );
};

export default View;
