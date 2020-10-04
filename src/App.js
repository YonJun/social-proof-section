import React from "react";
import "./styles.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider
} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Description from "./Layouts/Description";
import Rank from "./Layouts/Rank";
import Backdrop from "./Layouts/Backdrop";
import Users from "./Layouts/Users";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  }
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: `'Spartan', sans-serif`
  },
  palette: {
    primary: {
      main: `hsl(300, 43%, 22%)`,
      light: "hsl(300, 24%, 96%)"
    },
    text: {
      primary: "hsl(0, 0%, 100%)",
      secondary: "hsl(333, 80%, 67%)"
    },
    secondary: {
      main: "hsl(303, 10%, 53%)"
    }
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#fff"
        }
      }
    }
  }
});

export default function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Backdrop />
      <Container maxWidth="lg">
        <Box
          height="auto"
          minHeight="100vh"
          paddingTop={10}
          position="relative"
        >
          <Grid container spacing={3} className={classes.root}>
            <Grid item xs={12} md={5}>
              <Description />
            </Grid>
            <Grid item xs={12} md={7}>
              <Rank />
            </Grid>
            <Grid item xs={12} elevation={3}>
              <Users />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
