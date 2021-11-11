const path = require('path');
const fs = require('fs/promises');

export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

export const key = "e837619059a131168a749b809109aaf3";

export async function getRandomCityId() {
  const filePath = path.join(process.cwd(), 'public', 'city.list.min.json');
  const fileData = await fs.readFile(filePath)
  const data = await JSON.parse(fileData);

  const randomInt = getRandomInt(0, data.length)

  return data[randomInt].id;
}