import type { NextApiRequest, NextApiResponse } from "next";
import GenreApi from "@/utils/api/genre";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (id) {
    const result = await GenreApi.getArtistsByGenre(id);
    res.status(200).json(result);
  }

};

export default handler;
