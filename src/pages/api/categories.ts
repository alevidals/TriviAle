import { Option } from "@/components/atoms/Select";
import type { NextApiRequest, NextApiResponse } from "next";

type Category = {
  id: number;
  name: string;
};

type Response =
  | Option[]
  | {
      message: string;
    };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        process.env.OPENTDB_BASE_URL + "/api_category.php",
        {
          method: "GET",
        }
      );

      if (response.status !== 200 || !response.ok) {
        return res.status(400).json({
          message: "The request went wrong",
        });
      }

      const jsonResponse = await response.json();

      const categories: Option[] = jsonResponse.trivia_categories.map(
        (category: Category): Option => ({
          text: category.name,
          value: category.id.toString(),
        })
      );

      return res.status(200).json(categories);
    } catch (error: any) {
      console.error(error);

      return res.status(500).json({
        message: "Something went wrong",
      });
    }
  } else {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }
}
