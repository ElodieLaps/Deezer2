import axios from "axios";
import { formatData, formatNextPageIndex } from "../helpers/searchApi";
import Item from "../models/item";

export type SearchResultType = {
  data: Item[];
  nextPageIndex: number | null;
  total: number;
};

export const initialResult = {
  data: [],
  nextPageIndex: 0,
  total: 0,
};

export enum SearchTypeEnum {
  album = "album",
  artist = "artist",
  history = "history",
  playlist = "playlist",
  podcast = "podcast",
  ratio = "radio",
  track = "track",
  user = "user",
}

class SearchApi {
  api = axios.create({
    baseURL: "https://api.deezer.com/",
  });
  constructor() {
    this.api;
  }

  async findSomethingByKeyword(
    keyword: string | string[],
    type: SearchTypeEnum,
    index: number = 0
  ) {
    let result: SearchResultType = initialResult;
    try {
      const response = await this.api.get(
        `/search/${type}?q=${keyword}&index=${index}`
      );
      const { data } = response
      result = {
        data: data?.data && formatData(data?.data) || [],
        nextPageIndex: data.next
          ? formatNextPageIndex(data.next)
          : null,
        total: response?.data.total ?? 0,
      };
    } catch (error) {
      console.log(error);
    }
    return result;
  }
}

export default new SearchApi();
