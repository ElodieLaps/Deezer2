
import Item from "@/utils/models/item";
import View from "./view";

export type ResultListProps = {
  data: Item[];
};

const ResultList = (props: ResultListProps) => {
  return <View {...props} />;
};

export default ResultList;
