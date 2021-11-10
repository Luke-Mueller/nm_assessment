const key = "e837619059a131168a749b809109aaf3";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=${key}`
      );
      const data = await response.json();
      res.status(200).json({ data });
    } catch (error) {
      console.log("error: ", error);
    }
  }
}