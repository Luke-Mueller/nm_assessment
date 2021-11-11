import { key } from "../index";

async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?id=${req.query.cityId}&units=imperial&appid=${key}`
      );
      const data = await response.json();
      res.status(200).json({ data });
    } catch (error) {
      console.log("error: ", error);
    }
  }
}

export default handler;
