import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import NavBar from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import "../../index.css"; 

export default function Profil(props: any) {

  return (
    <>
      <NavBar selected={props.selected} />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: "white",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth={false} sx={{ mt: 5, mb: 5 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={15}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    width: "81%",
                    margin: "auto",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                    zIndex: 1,
                    marginBottom: "100px",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  <p id="nadpis">Profil</p>
                  <p className="podnadpis">Šimon Šťastný</p>
                  <Link to={"/login"} id="presmerovani">
                  Odhlásit se
                </Link>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
