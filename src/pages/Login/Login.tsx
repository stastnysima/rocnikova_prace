import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [jmeno, noveJmeno] = useState("simon.stastny"); 
  const [heslo, noveHeslo] = useState("heslo123"); 
  const [error, Error] = useState(""); 

  const login = () => {
    const spravneUdaje = jmeno === "simon.stastny" && heslo === "heslo123";

    if (!spravneUdaje) {
      Error("Nesprávné Uživatelské Jméno a Nebo Heslo"); 
    } else {
      navigate("/main"); 
    }
  };

  return (
    <>
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
                    width: "400px",
                    margin: "auto",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                    marginBottom: "100px",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  {error && <p id="error">{error}</p>} 
                  <input
                    type="text"
                    placeholder="Uživatelské Jméno"
                    value={jmeno}
                    onChange={(e) => noveJmeno(e.target.value)}
                  />
                  <input
                    type="password"
                    placeholder="Heslo"
                    value={heslo}
                    onChange={(e) => noveHeslo(e.target.value)}
                  />
                  <p onClick={login} id="presmerovani">Přihlásit se</p>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
