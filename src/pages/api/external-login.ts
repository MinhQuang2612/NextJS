import { NextApiRequest, NextApiResponse } from "next";
import axios, { AxiosError } from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const response = await axios.post("https://api.gw-sms.com/api/portal/auth/login", req.body, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      res.status(200).json(response.data);
    } catch (error: unknown) {  
      if (error instanceof AxiosError) {
        res.status(error.response?.status || 500).json(error.response?.data || { message: "Something went wrong" });
      } else {
        res.status(500).json({ message: "Unexpected error occurred" });
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
