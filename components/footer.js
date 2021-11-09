import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function Footer() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" component="footer">
      <FormControlLabel control={<Switch defaultChecked />} label="Dark mode" />

      </Container>
    </>
  );
}
