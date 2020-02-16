import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const API_KEY = process.env.SUPERHERO_API_KEY;
    const search = req.query.name;

    const response = await axios.get(
      `https://superheroapi.com/api/${API_KEY}/search/${search}`
    );

    res.json({ data: response.data });
  } catch (e) {
    res.status(500).json({ msg: "Error occured searching for superhero name" });
  }
};
