import { SearchTypeEnum } from "@/utils/api/search";
import { ReactNode } from "react";
import View from "./view";

export type ItemCardProps = {
  image: ReactNode;
  text: ReactNode;
  type: SearchTypeEnum;
  footer?: ReactNode;
  link?: string;
};

const ItemCard = (props: ItemCardProps) => {
  return <View {...props} />;
};

export default ItemCard;
