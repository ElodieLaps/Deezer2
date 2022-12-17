import Template from "@/components/atoms/template";
import Item from "@/utils/models/item";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HomeProps } from ".";
import styles from "./styles.module.scss";

type ViewProps = HomeProps;

const View = (props: ViewProps) => {
  const { genres } = props;
  console.log("genre", genres);
  const [artists, setArists] = useState([]);

  const content = (
    <div className={styles.home}>
      <Link href={"/recherche"}>recherche</Link>

      <div className={styles.container}>
        <div className={styles.genres}>
          {genres.map((genre) => {
            const onClick = async () => {
              const { data: result } = await axios.get(
                `/api/genre/artists?id=${genre.id}`
              );
              setArists(result);
              console.log("result", result);
            };

            return (
              <div
                className={styles.genre}
                key={genre.id}
                onClick={() => onClick()}
              >
                <div>
                  <div className={styles.genre__image}>
                    {genre.images?.imageM && (
                      <Image
                        // loader={myLoader}
                        src={genre?.images?.imageM}
                        alt={genre.name}
                        width={100}
                        height={100}
                      />
                    )}
                  </div>
                  <div className={styles.genre__name}>{genre.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {artists.map((item: Item) => {
        return <div key={item.id}>{item.name}</div>;
      })}
    </div>
  );

  return <Template content={content} color={"#ff0066"} />;
};

export default View;
