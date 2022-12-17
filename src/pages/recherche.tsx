import SearchTemplate from "@/components/templates/search";
import { NextPage } from "next";
import Head from "next/head";

const Search: NextPage = () => {
  return (
    <>
      <Head>
        <title>Zeeder - recherche</title>
      </Head>
      <SearchTemplate />
    </>
  );
};

export default Search;
