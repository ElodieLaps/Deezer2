import WaveSvg from "@/components/atoms/waveSvg";
import { ReactNode } from "react";
import styles from "./styles.module.scss";

type TemplateProps = {
  header?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  color?: string;
};
const Template = (props: TemplateProps) => {
  const { header, content, footer, color } = props;
  return (
    <div className={styles.template__container}>
      <header className={styles.template__header}>{header ?? "header"}</header>
      <main className={styles.template__main}>
        <section className={styles.template__main__content}>
          {content ?? "content"}
        </section>
        <div className={styles.template__main__wave}>
          <WaveSvg color={color ?? "#00cc99"} />
        </div>
      </main>
      <footer
        className={styles.template__footer}
        style={{ backgroundColor: color ?? "#00cc99" }}
      >
        {footer ?? "footer"}
      </footer>
    </div>
  );
};

export default Template;
