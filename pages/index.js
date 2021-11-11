import CityCard from "../components/cityCard";
import Spinner from "../components/spinner";
import { getRandomCityId } from "./api";
import { key } from "./api";

function HomePage({ featuredCity }) {
  return (
    <>
      {!featuredCity && <Spinner />}
      {featuredCity && <CityCard city={featuredCity} />}
    </>
  );
}

export async function getStaticProps() {
  const cityId = await getRandomCityId();
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${key}`
  );
  const data = await response.json();
  return {
    props: {
      featuredCity: data,
    },
  };
}

export default HomePage;
