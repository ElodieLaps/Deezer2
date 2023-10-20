import { SearchTypeEnum } from "@/utils/api/search";
import View from "./view";

export type SearchBarProps = {
  placeholder: string;
  handleKeywordChange: (value: string) => void;
  handleTypeChange: (value: SearchTypeEnum) => void;
  hasKeywordOrResult: boolean;
  selected: SearchTypeEnum | null;
};

const SearchBar = (props: SearchBarProps) => {
  return <View {...props} />;
};

export default SearchBar;
