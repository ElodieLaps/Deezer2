import HomeTemplate from "@/components/templates/home";
import GenreApi from "@/utils/api/genre";
import Genre from "@/utils/models/genre";
import { GetServerSideProps } from "next";
import Head from "next/head";

type HomeProps = {
  genres: Genre[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await GenreApi.getAllGenre();
  const genres = JSON.parse(response);

  return {
    props: {
      genres,
    },
  };
};

const Home = (props: HomeProps) => {
  return (
    <>
      <Head>
        <title>Zeeder - accueil</title>
      </Head>
      <HomeTemplate {...props} />
    </>
  );
};

export default Home;
