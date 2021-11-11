import { getRandomCityId, getRandomInt } from "../pages/api";

test("return a numeric id", async () => {
  for (let i = 0; i < 15; i++) {
    const cityId = await getRandomCityId();
    expect(typeof cityId).toEqual("number");
  }
});

test("return random integer between two numbers", () => {
  for (let i = 0; i < 20; i++) {
    const randomInt = getRandomInt(0, 100);
    expect(randomInt).toBeGreaterThanOrEqual(0);
    expect(randomInt).toBeLessThanOrEqual(100)
  }
});
