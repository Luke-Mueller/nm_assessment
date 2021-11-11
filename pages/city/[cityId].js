import CityCard from "../../components/cityCard";
import { key } from "../api";

function CityPage({ featuredCity }) {
  return <CityCard city={featuredCity} />;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const cityId = params.cityId;
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?id=${cityId}&units=imperial&appid=${key}`
  );
  const data = await response.json();
  return {
    props: {
      featuredCity: data 
    }
  };
}

export default CityPage;
