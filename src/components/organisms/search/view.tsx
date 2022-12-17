import SearchBar from "@/components/molecules/searchBar";
import ResultList from "@/components/molecules/resultList";
import { SearchTypeEnum } from "@/utils/api/search";
import { SearchProps } from ".";
import { SearchStateType } from "./searchReducer";
import styles from "./styles.module.scss";

interface ViewType extends SearchProps {
  handleKeywordChange: (value: string) => void;
  handleTypeChange: (value: SearchTypeEnum) => void;
  searchState: SearchStateType;
}

const View = (props: ViewType) => {
  const { handleKeywordChange, handleTypeChange, searchState } = props;
  const { keyword, result, isLoading } = searchState;

  const searchBarProps = {
    placeholder: "chanson, album, artiste...",
    handleKeywordChange: handleKeywordChange,
    handleTypeChange: handleTypeChange,
    hasKeywordOrResult: !!keyword || !!result?.data.length,
  };
  const resultListProps = {
    data: result?.data,
  };

  console.log("search", searchState);

  return (
    <div className={styles.search}>
      <SearchBar {...searchBarProps} />
      <ResultList {...resultListProps} />
    </div>
  );
};

export default View;
