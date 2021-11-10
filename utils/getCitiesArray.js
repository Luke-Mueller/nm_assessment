export default async function getCitiesArray(userInput) {
  const citiesArray = [];
  const response = await fetch("city.list.min.json");
  const cityList = await response.json();
  cityList.forEach((city) => {
    if (city.name.toLowerCase() === userInput.toLowerCase()) {
      citiesArray.push(city);
    }
  });
  return citiesArray;
}
