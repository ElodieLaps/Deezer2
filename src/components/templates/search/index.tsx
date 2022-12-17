import Template from "@/components/atoms/template";
import SearchOrganism from "@/components/organisms/search";

type SearchProps = {};

const Search = (props: SearchProps) => {
  const content = <SearchOrganism />;
  return <Template content={content} />;
};

export default Search;
