export default function getWindDirection(deg) {
  let direction;

  if (deg >= 349 || deg < 11) direction = "N";
  else if (deg >= 11 && deg < 34) direction = "NNE";
  else if (deg >= 34 && deg < 56) direction = "NE";
  else if (deg >= 56 && deg < 79) direction = "ENE";
  else if (deg >= 79 && deg < 101) direction = "E";
  else if (deg >= 101 && deg < 124) direction = "ESE";
  else if (deg >= 124 && deg < 146) direction = "SE";
  else if (deg >= 146 && deg < 169) direction = "SSE";
  else if (deg >= 169 && deg < 191) direction = "S";
  else if (deg >= 191 && deg < 214) direction = "SSW";
  else if (deg >= 214 && deg < 236) direction = "SW";
  else if (deg >= 236 && deg < 259) direction = "WSW";
  else if (deg >= 259 && deg < 281) direction = "W";
  else if (deg >= 281 && deg < 304) direction = "WNW";
  else if (deg >= 304 && deg < 326) direction = "NW";
  else if (deg >= 326 && deg < 349) direction = "NNW";

  return direction;
}
