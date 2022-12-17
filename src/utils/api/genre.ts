import { createItem } from './../factories/item';
import axios from "axios";
import { createGenre } from "../factories/genre";
import Genre from "../models/genre";
import Item from "../models/item";

class GenreApi {
  api = axios.create({
    baseURL: "https://api.deezer.com/",
  });
  constructor() {
    this.api;
  }

  async getAllGenre() {
    let data: Genre[] = [];
    try {
      const { data: response } = await this.api.get(
        '/genre'
      );
      response?.data?.map((item: any) => {
        return data.push(createGenre(item))
      })
    } catch (error) {
      console.log(error);
    }
    return JSON.stringify(data);
  }

  async getArtistsByGenre(genreId: string | string[]) {
    let data: Item[] = []
    try {
      const { data: response } = await this.api.get(
        ` /genre/${genreId}/artists`
      );
      response?.data?.map((item: any) => {
        return data.push(createItem(item))
      })
    } catch (error) {
      console.log(error);
    }
    return data;
  }
}

export default new GenreApi();