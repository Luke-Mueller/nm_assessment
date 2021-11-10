import { useRef, useState } from "react";
import { Container, TextField } from "@mui/material";

import getCitiesArray from "../utils/getCitiesArray";
import InputAdornment from "./inputAdornment";
import constants from "../constants/ui";

export default function Navbar() {
  const [error, setError] = useState(constants.initialErrorObj);
  const cityInputRef = useRef();

  async function submitHandler(event) {
    event.preventDefault();
    const userInput = cityInputRef.current.value.trim();
    if (!userInput) {
      setError({ hasError: true, message: constants.defaultErrorMessage });
      return;
    }
    let cities = await getCitiesArray(userInput);
    console.log('cities: ', cities);
    cityInputRef.current.value = null;
  }

  return (
    <Container
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
      maxWidth="xl"
      component="header"
    >
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
        }}
        variant="standard"
      />
    </Container>
  );
}
