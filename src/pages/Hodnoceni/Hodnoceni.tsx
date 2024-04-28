import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import NavBar from "../../components/NavBar/NavBar";
import "../../index.css";

export default function Hodnoceni(props: any) {
 
  const vypocetZnamek = (vahy: number[], znamky: number[][]) => {
    let soucetPrumeru = 0;
    let vaha = 0;

    for (let i = 0; i < vahy.length; i++) {
      const soucetZnamek = znamky[i].reduce((acc, grade) => acc + grade, 0);
      if (soucetZnamek !== 0) { 
        soucetPrumeru += vahy[i] * (soucetZnamek / znamky[i].length);
        vaha += vahy[i];
      }
    }

    if (vaha !== 0) {
      const prumer = soucetPrumeru / vaha;
      const vyslednaZnamka = Math.round(prumer);
      return { prumer: prumer.toFixed(2), vyslednaZnamka };
    } else {
      return { prumer: "", vyslednaZnamka: "1" };
    }
  };

  const predmety = [
    { name: "Chování", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [], [], [], [], [], [], []] },
    { name: "Počítačové sítě (SIT)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [], [], [4, 3], [], [], [], [3]] },
    { name: "Matematika (MAT)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[5, 5, 5, 5], [], [], [], [], [], [], [], [], [2, 3]] },
    { name: "Programování (PRO)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [], [], [], [], [], [], [3]] },
    { name: "Databázové systémy a aplikace (DBA)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [2, 2, 1, 1], [], [], [], [], [], []] },
    { name: "Anglický jazyk (ANJ)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [1, 1, 2], [], [], [], [], [], [2.5, 3], []] },
    { name: "Vývoj webových aplikací (WAP)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [], [], [], [], [], [], [3, 5, 1, 3, 1]] },
    { name: "Tělesná výchova (TEV)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [], [], [], [], [], [], [1, 1, 1]] },
    { name: "Český jazyk a literatura (CJL)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[5], [], [5,3], [], [], [], [], [], [], [1, 2]] },
    { name: "Praxe (PRA)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [], [], [], [], [], [], [3]] },
    { name: "Operační systémy (OPS)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [], [], [2, 3], [], [], [], []] },
    { name: "Počítačová grafika (GRA)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [], [], [], [], [], [], [1, 2, 2]] },
    { name: "Číslicová technika (CIT)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [], [], [5, 3, 3], [], [], [], []] },
    { name: "Ekonomika (EKO)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [2, 3], [], [], [], [1], [], []] },
    { name: "Základy společenských věd (ZSV)", vahy: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], znamky: [[], [], [], [], [], [4, 3], [], [], [], []] },
  ];

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
                    marginBottom: "100px", 
                  }}
                >
                  <p
                    id="nadpis"
                  >
                    Hodnocení
                  </p>
                  <p className="podnadpis">
                    2. Pololetí
                  </p>
                  <div id="tabulka3">
                    <table className="tabulky">
                      <thead>
                        <tr>
                          <th className="hlavicka">Předmět</th>
                          <th className="hlavicka">Váha 0,1</th>
                          <th className="hlavicka">Váha 0,2</th>
                          <th className="hlavicka">Váha 0,3</th>
                          <th className="hlavicka">Váha 0,4</th>
                          <th className="hlavicka">Váha 0,5</th>
                          <th className="hlavicka">Váha 0,6</th>
                          <th className="hlavicka">Váha 0,7</th>
                          <th className="hlavicka">Váha 0,8</th>
                          <th className="hlavicka">Váha 0,9</th>
                          <th className="hlavicka">Váha 1,0</th>
                          <th className="hlavicka">Průměr</th>
                          <th className="hlavicka">Výsledná Známka</th>
                        </tr>
                      </thead>
                      <tbody>
                        {predmety.map((predmet, predmetIndex) => {
                          const { prumer, vyslednaZnamka } = vypocetZnamek(predmet.vahy, predmet.znamky);
                          return (
                            <tr key={predmetIndex}>
                              <td>{predmet.name}</td>
                              {predmet.znamky.map((znamkyPodleVahy, vahaIndex) => ( 
                                <td key={vahaIndex}>{znamkyPodleVahy.length > 0 ? znamkyPodleVahy.join(", ") : ""}</td>
                              ))}
                              <td>{prumer === "N/A" ? "" : prumer}</td>
                              <td>{vyslednaZnamka === "N/A" ? "" : vyslednaZnamka}</td>
                            </tr>
                          );
                        })}
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