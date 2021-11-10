import { Card, CardContent, Grid, Typography } from "@mui/material";
import uiConstants from "../constants/ui";
import wmConstants from "../constants/weathermap";
import getWindDirection from "../utils/getWindDirection";

export default function CityCard({ city }) {
  const iconSrc = `${wmConstants.iconProxyURL}${city.weather[0].icon}@2x.png`;
  const windDirection = getWindDirection(city.wind.deg);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "sm",
        minWidth: uiConstants.cardMinWidth,
        paddingLeft: 5,
        paddingRight: 5,
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <section>
          <img
            src={iconSrc}
            alt="weather icon"
            style={{ width: "100px", height: "100px" }}
          />
          <Typography variant="h4">
            {city.name}, {city.sys.country}
          </Typography>
          <br></br>
          <Typography variant="subtitle1">
            Today brings {city.weather[0].description}
          </Typography>
        </section>

        <Grid container spacing={2} columns={12}>
          <Grid item xs={4}>
            <Typography variant="h6">Temps</Typography>
            <Typography variant="subtitle1">
              Feels like: {Math.round(city.main.feels_like)} &#176;F
            </Typography>
            <Typography variant="subtitle1">
              High: {Math.round(city.main.temp_max)} &#176;F
            </Typography>
            <Typography variant="subtitle1">
              Low: {Math.round(city.main.temp_min)} &#176;F
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h6">Moisture</Typography>
            <Typography variant="subtitle1">
              Humidity: {Math.round(city.main.humidity)} %
            </Typography>
            {city.rain && (
              <Typography variant="subtitle1">
                Rainfall: {city.rain["1h"]} mm
              </Typography>
            )}
            {city.snow && (
              <Typography variant="subtitle1">
                Snowfall: {city.snow["1h"]} mm
              </Typography>
            )}
          </Grid>

          <Grid item xs={4}>
            <Typography variant="h6">Wind</Typography>
            <Typography variant="subtitle1">
              Speed: {Math.round(city.wind.speed) || 0} mph
            </Typography>
            <Typography variant="subtitle1">
              Gusts: {Math.round(city.wind.gust) || 0} mph
            </Typography>
            <Typography variant="subtitle1">
              Direction: {windDirection}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
