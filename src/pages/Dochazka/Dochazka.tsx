import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import NavBar from "../../components/NavBar/NavBar";
import "../../index.css";

export default function Dochazka(props: any) {
  const [data] = React.useState([
    { name: "Počítačové sítě (SIT)", hodiny: 66, absence: 8 },
    { name: "Matematika (MAT)", hodiny: 67, absence: 7 },
    { name: "Programování (PRO)", hodiny: 62, absence: 6 },
    { name: "Databázové systémy a aplikace (DBA)", hodiny: 32, absence: 6 },
    { name: "Anglický jazyk (ANJ)", hodiny: 46, absence: 5 },
    { name: "Vývoj webových aplikací (WAP)", hodiny: 34, absence: 4 },
    { name: "Tělesná výchova (TEV)", hodiny: 29, absence: 3 },
    { name: "Český jazyk a literatura (CJL)", hodiny: 36, absence: 3 },
    { name: "Praxe (PRA)", hodiny: 36, absence: 2 },
    { name: "Operační systémy (OPS)", hodiny: 36, absence: 2 },
    { name: "Počítačová grafika (GRA)", hodiny: 32, absence: 2 },
    { name: "Číslicová technika (CIT)", hodiny: 34, absence: 2 },
    { name: "Ekonomika (EKO)", hodiny: 30, absence: 2 },
    { name: "Základy společenských věd (ZSV)", hodiny: 12, absence: 0 },
  ]);

  const procentoAbsence = (absence: number, hodiny: number) => {
    return ((absence / hodiny) * 100).toFixed(2);
  };

  const celkovaAbsence = data.reduce(
    (total, predmet) => total + predmet.absence,
    0
  );

  const hodinyCelek = data.reduce(
    (total, predmet) => total + predmet.hodiny,
    0
  );

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
                  <p id="nadpis">Absence v Předmětech</p>
                  <p className="podnadpis">2. Pololetí</p>
                  <div id="tabulka3">
                    <table className="tabulky">
                      <thead>
                        <tr>
                          <th className="hlavicka">Předmět</th>
                          <th className="hlavicka">Hodin v Rozvrhu</th>
                          <th className="hlavicka">Absence (Hodin)</th>
                          <th className="hlavicka">Absence (%)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((predmet) => (
                          <tr>
                            <td>{predmet.name}</td>
                            <td>{predmet.hodiny}</td>
                            <td>{predmet.absence}</td>
                            <td>
                              {procentoAbsence(predmet.absence, predmet.hodiny)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td className="nozicka">Celkem absence za období</td>
                          <td className="nozicka">{hodinyCelek}</td>
                          <td className="nozicka">{celkovaAbsence}</td>
                          <td className="nozicka">-</td>
                        </tr>
                      </tfoot>
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
