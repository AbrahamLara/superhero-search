import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const API_KEY = process.env.SUPERHERO_API_KEY;
    const id = req.query.id;

    const response = await axios.get(
      `https://superheroapi.com/api/${API_KEY}/${id}/image`
    );

    res.json({ data: response.data });
  } catch (e) {
    res.status(500).json({ msg: "Error occured fetching data" });
  }
};
