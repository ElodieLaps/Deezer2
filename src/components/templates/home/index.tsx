import styles from "./styles.module.scss";

export type HomeTemplate = {
  title: string;
};

export default function HomeTemplate({ title }: HomeTemplate) {
  return <p className={styles.home__title}>{title}</p>;
}
