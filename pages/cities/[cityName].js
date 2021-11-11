import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";

import CityListItem from "../../components/cityListItem";
import getCitiesArray from "../../utils/getCitiesArray";

import uiConstants from "../../constants/ui";

function CitiesPage({ cityName }) {
  const [citiesArray, setCitiesArray] = useState([]);

  useEffect(() => {
    (async function () {
      const citiesArray = await getCitiesArray(cityName);
      setCitiesArray(citiesArray);
    })();
  }, [cityName]);

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "sm",
        minWidth: uiConstants.cardMinWidth,
        padding: 5,
      }}
    >
      <Typography variant="h4">Matches</Typography>
      <CardContent>
        {citiesArray.map((city) => (
          <CityListItem key={city.id} city={city} />
        ))}
      </CardContent>
    </Card>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { cityName },
  } = context;
  return {
    props: {
      cityName,
    },
  };
}

export default CitiesPage;
