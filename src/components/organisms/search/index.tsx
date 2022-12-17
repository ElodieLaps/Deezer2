import { initialResult, SearchTypeEnum } from "@/utils/api/search";
import usePrevious from "@/utils/hooks/usePrevious";
import useScrollHitBottom from "@/utils/hooks/useScrollHitBottom";
import { useEffect, useReducer } from "react";
import searchReducer, {
  ActionType,
  initialSearchState,
  searchMethods,
  SearchStateType,
} from "./searchReducer";
import View from "./view";

export type SearchProps = {};

const Search = (props: SearchProps) => {
  const [searchState, dispatch] = useReducer<
    (state: SearchStateType, action: ActionType) => SearchStateType
  >(searchReducer, initialSearchState);

  const prevType = usePrevious(searchState.type) as SearchTypeEnum | undefined;
  const isBottomHit = useScrollHitBottom();

  const { updateKeyword, updateSearchType, fetchResult, initSearchState } =
    searchMethods;

  const handleKeywordChange = (keyword: string) => {
    updateKeyword(dispatch, keyword);
  };

  const handleTypeChange = (type: SearchTypeEnum) => {
    type !== searchState.type && updateSearchType(dispatch, type);
  };

  useEffect(() => {
    if (searchState.keyword.length <= 2) {
      initSearchState(dispatch);
    }
    if (searchState.keyword.length > 2) {
      if (prevType === searchState.type) {
        fetchResult(dispatch, searchState);
      }
      if (prevType !== searchState.type) {
        fetchResult(dispatch, { ...searchState, result: initialResult });
      }
    }
  }, [searchState.keyword.length, searchState.type]);

  useEffect(() => {
    if (isBottomHit) {
      fetchResult(dispatch, searchState);
    }
  }, [isBottomHit]);

  return (
    <>
      <View
        handleKeywordChange={handleKeywordChange}
        handleTypeChange={handleTypeChange}
        searchState={searchState}
        {...props}
      />
    </>
  );
};

export default Search;
