import { useEffect, useState } from "react";
import CityCard from "../components/cityCard";
import Spinner from "../components/spinner";
import getRandomCity from "../utils/getRandomCity";

export default function HomePage() {
  const [featuredCity, setFeaturedCity] = useState();

  /*
   * Finds a random city to display onload.
   * When deployed, it will display local weather
   * based on the user's IP address instead.
   */
  useEffect(() => {
    (async () => {
      const { id: cityId } = await getRandomCity();
      const response = await fetch(`api/cities/${cityId}`);
      const { data } = await response.json();
      console.log(data);
      setFeaturedCity(data);
    })();
  }, [setFeaturedCity, getRandomCity]);

  return (
    <>
      {!featuredCity && <Spinner />}
      {featuredCity && <CityCard city={featuredCity} />}
    </>
  );
}
