import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const API_KEY = process.env.SUPERHERO_API_KEY;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const search = req.query.search;

    const response = await axios.get(
      `https://superheroapi.com/api/${API_KEY}/search/${search}`
    );

    res.json({ data: response.data });
  } catch (e) {
    res.status(400).json({ msg: "Error occured" });
  }
};
