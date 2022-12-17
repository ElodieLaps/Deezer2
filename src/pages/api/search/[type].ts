import type { NextApiRequest, NextApiResponse } from "next";
import SearchApi, { SearchTypeEnum } from "@/utils/api/search";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
   const { q: keyword, type, index } = req.query;

   if (keyword) {
      const result = await SearchApi.findSomethingByKeyword(
         keyword,
         type as SearchTypeEnum,
         Number(index)
      );
      res.status(200).json(result);
   }
};

export default handler;