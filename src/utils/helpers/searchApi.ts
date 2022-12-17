import Item from "../models/itemType";
import { createItem } from './../factories/item';

export const formatData = (response: any) => {
   const data: Item[] = []
   response?.map((item: any) => {
      return data.push(createItem(item))
   });
   return data;
}

export const formatNextPageIndex = (nextPageUrl: string): number => {
   const parsedUrl = nextPageUrl.split("&") ?? [];
   const param =
      parsedUrl.find((param: string) => param.startsWith("index=")) ?? "";
   const nextPageIndex = param.split("=")[1];
   return Number(nextPageIndex);
};