import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Container, IconButton, TextField, Typography } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

import getCitiesArray from "../utils/getCitiesArray";
import InputAdornment from "./inputAdornment";
import constants from "../constants/ui";

export default function Navbar() {
  const [error, setError] = useState(constants.initialErrorObj);
  const router = useRouter();
  const cityInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const userInput = cityInputRef.current.value.trim();
    if (!userInput) {
      setError({ hasError: true, message: constants.defaultErrorMessage });
      return;
    }
    let cities = await getCitiesArray(userInput);

    if (!cities.length) {
      const error = {
        hasError: true,
        message: constants.noCityFoundErrorMessage,
      };
      setError(error);
    }
    if (cities.length === 1) {
      const response = await fetch(`api/cities/${cities[0].id}`);
      const { data } = await response.json();
      router.push({
        pathname: "/cities/[cityId]",
        query: { cityId: data.id },
      });
    }
    if (cities.length > 1) {
      // link to cities route
      console.log("multiple data: ", cities);
    }
    cityInputRef.current.value = null;
  }

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      maxWidth="lg"
      component="header"
    >
      {router.pathname === "/cities/[cityId]" && (
        <Link href="/">
          <IconButton color="secondary" aria-label="go back">
            <KeyboardBackspaceIcon />
            <Typography variant="button">Go Back</Typography>
          </IconButton>
        </Link>
      )}

      {(router.pathname === "/cities/[cityId]" || "/") && (
        <TextField
          color="secondary"
          onChange={() => setError({ hasError: false, message: " " })}
          error={error.hasError}
          helperText={error.message}
          InputProps={{
            endAdornment: <InputAdornment submitHandler={submitHandler} />,
          }}
          inputRef={cityInputRef}
          label="Search by city"
          sx={{
            width: constants.cityInputWidth,
            minWidth: constants.cityInputMinWidth,
            marginLeft: 'auto'
          }}
          variant="standard"
        />
      )}
    </Container>
  );
}
