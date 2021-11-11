import { useRouter } from "next/router";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import RoomIcon from "@mui/icons-material/Room";
import { useTheme } from "@mui/material/styles";

export default function CityListItem({ city }) {
  const router = useRouter();
  const { palette } = useTheme();
  let listItemText = "";
  if (city.name) listItemText = listItemText.concat(city.name);
  if (city.state) listItemText = listItemText.concat(", ", city.state);
  if (city.country) listItemText = listItemText.concat(" - ", city.country);

  function clickHandler(event) {
    event.preventDefault();
    router.push({
      pathname: "/city/[cityId]",
      query: { cityId: city.id },
    });
  }

  return (
    <ListItem onClick={clickHandler}>
      <ListItemButton sx={{ color: palette.secondary }}>
        <ListItemIcon>
          <RoomIcon />
        </ListItemIcon>
        <Typography sx={{ color: "secondary" }} variant="subtitle1">
          {listItemText}
        </Typography>
      </ListItemButton>
    </ListItem>
  );
}
