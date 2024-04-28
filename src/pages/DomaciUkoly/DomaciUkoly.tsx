import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "../../index.css";
import NavBar from "../../components/NavBar/NavBar";

export default function DomaciUkoly(props: any) {
  return (
    <>
      <NavBar selected={props.selected} />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: "white",
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
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
                  }}
                >
                  <p id="nadpis">Domácí Úkoly</p>
                  <div id="tabulka3">
                    <table className="tabulky" style={{ width: "100%" }}>
                      <thead>
                        <tr>
                          <th className="hlavicka">Název Úkolu</th>
                          <th className="hlavicka">Předmět</th>
                          <th className="hlavicka">Přiděleno</th>
                          <th className="hlavicka">Termín Odevzdání</th>
                          <th className="hlavicka">Odevzdáno</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Učebnice strana 137 cvičení 27, 28, 29</td>
                          <td>Matematika (MAT)</td>
                          <td>28.4.2024 18:51</td>
                          <td>10.5.2024 23:59</td>
                          <td>Neodevzdáno</td>
                        </tr>
                        <tr>
                          <td>
                            Vytvořte diagram sítě pro malou firmu a popište,{" "}
                            <br />
                            jaké prvky by byly součástí této sítě
                          </td>
                          <td>Počítačové sítě (SIT)</td>
                          <td>30.4.2024 16:50</td>
                          <td>31.5.2024 23:59</td>
                          <td>Neodevzdáno</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
