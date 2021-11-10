import Box from "@mui/material/Box";
import Navbar from "./navbar";
import Footer from "./footer";

import useWindowDimensions from "../hooks/useWindowDimensions";
import constants from "../constants/ui";

export default function Layout({ children }) {
  const [width, height] = useWindowDimensions();

  return (
    <Box
      sx={{
        minWidth: `${width / 16}rem`,
        minHeight: `${height / 16}rem`,
        padding: constants.bodyPadding,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
      }}
    >
      <Navbar />
      <main style={{ flex: 1, width: "100%" }}>{children}</main>
      <Footer />
    </Box>
  );
}
