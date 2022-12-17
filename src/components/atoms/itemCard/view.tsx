import Link from "next/link";
import { ItemCardProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = ItemCardProps;

const View = (props: ViewProps) => {
  const { image, text, footer, type, link = "" } = props;
  return (
    <Link href={link}>
      <div className={styles.itemCard}>
        <div className={styles.itemCard__info}>
          {image}
          {text}
        </div>
        {!!footer && <div className={styles.itemCard__footer}>{footer}</div>}{" "}
      </div>
    </Link>
  );
};

export default View;
