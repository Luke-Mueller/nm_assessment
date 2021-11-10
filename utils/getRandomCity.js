function _getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export default async function getRandomCity() {
  const response = await fetch("city.list.min.json");
  const cityList = await response.json();
  const randomInt = _getRandomInt(0, cityList.length);

  return cityList[randomInt];
}
