import { useEffect, useState } from "react";
import {
  Box,
  CssBaseline,
  Container,
  TextField,
  Button,
  Paper,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getUser, createUser, updateUser } from "./api";

function App() {
  const [user, setUser] = useState();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(async () => {
    setUser(await getUser());
  }, [setUser]);

  const onSave = async () => {
    if (!user) {
      await createUser(user);
    } else {
      await updateUser(user);
    }
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container component="main">
        <CssBaseline />
        {user && (
          <Box sx={{ display: "flex", flexDirection: "column", mb: 2 }}>
            <span style={{ fontSize: 100 }}>🍕</span>
            <h2>Heya, I'm {user.name}</h2>
            <span>My role is: {user.role}</span>
            <span>I am located here: {user.location}</span>
          </Box>
        )}
        <Paper
          elevation={2}
          sx={{
            p: 3,
            display: "grid",
            gridGap: 20,
          }}
        >
          <TextField
            label="Name"
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />

          <TextField
            label="Role"
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          />

          <TextField
            label="Location"
            onChange={(e) => setUser({ ...user, location: e.target.value })}
          />

          <Button variant="contained" size="large" fullWidth onClick={onSave}>
            Save
          </Button>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
