import { SearchTypeEnum } from "@/utils/api/search";
import View from "./view";

export type SearchFilterProps = {
  handleTypeChange: (value: SearchTypeEnum) => void;
};

export type FilterType = {
  type: SearchTypeEnum;
  label: string;
};

const SearchFilter = (props: SearchFilterProps) => {
  const filters: FilterType[] = [
    { type: SearchTypeEnum.track, label: "chanson" },
    { type: SearchTypeEnum.album, label: "album" },
    { type: SearchTypeEnum.artist, label: "artiste" },
  ];
  const viewProps = { ...props, filters };

  return <View {...viewProps} />;
};

export default SearchFilter;
