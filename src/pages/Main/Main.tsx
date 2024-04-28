import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "../../index.css";
import NavBar from "../../components/NavBar/NavBar";

export default function Main(props: any) {
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
                    zIndex: 1, 
                    marginBottom: "100px", 
                  }}
                >
                  <p id="nadpis">Rozvrh</p>
                  <div id="tabulka1">
                    <table className="tabulky">
                      <thead>
                        <tr>
                          <th className="thead"></th>
                          <th className="thead">
                            1<br />
                            7:55 - 8:40
                          </th>
                          <th className="thead">
                            2<br />
                            8:45 - 9:30
                          </th>
                          <th className="thead">
                            3<br />
                            9:50 - 10:35
                          </th>
                          <th className="thead">
                            4<br />
                            10:40 - 11:25
                          </th>
                          <th className="thead">
                            5<br />
                            11:30 - 12:15
                          </th>
                          <th className="thead">
                            6<br />
                            12:20 - 13:05
                          </th>
                          <th className="thead">
                            7<br />
                            13:10 - 13:55
                          </th>
                          <th className="thead">
                            8<br />
                            14:00 - 14:45
                          </th>
                          <th className="thead">
                            9<br />
                            14:50 - 15:35
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="prednirada">
                            <b>Pondělí</b>
                          </td>
                          <td></td>
                          <td>ANJ</td>
                          <td>EKO</td>
                          <td>WAP</td>
                          <td>WAP</td>
                          <td>MAT</td>
                          <td></td>
                          <td>SIT</td>
                          <td>SIT</td>
                        </tr>
                        <tr>
                          <td className="prednirada">
                            <b>Úterý</b>
                          </td>
                          <td>PRA</td>
                          <td>PRA</td>
                          <td>MAT</td>
                          <td>CJL</td>
                          <td></td>
                          <td>OPS</td>
                          <td>OPS</td>
                          <td>SIT</td>
                          <td>SIT</td>
                        </tr>
                        <tr>
                          <td className="prednirada">
                            <b>Středa</b>
                          </td>
                          <td>ZSV</td>
                          <td>EKO</td>
                          <td>MAT</td>
                          <td>ANJ</td>
                          <td>TEV</td>
                          <td></td>
                          <td>PRO</td>
                          <td>PRO</td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="prednirada">
                            <b>Čtvrtek</b>
                          </td>
                          <td>CIT</td>
                          <td>CIT</td>
                          <td>MAT</td>
                          <td>CJL</td>
                          <td></td>
                          <td>GRA</td>
                          <td>GRA</td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td className="prednirada">
                            <b>Pátek</b>
                          </td>
                          <td>DBA</td>
                          <td>DBA</td>
                          <td>TEV</td>
                          <td>PRO</td>
                          <td>PRO</td>
                          <td>ANJ</td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", 
                    zIndex: 2, 
                    marginBottom: "20px", 
                    width: "81%",
                    margin: "auto",
                  }}
                >
                  <p
                    id="nadpis"
                  >
                    Jídelní Lístek
                  </p>
                  <div id="tabulka2">
                    <table className="tabulky">
                      <tbody>
                        <tr>
                          <td rowSpan={2} className="prednirada">
                            <b>Pondělí</b>
                          </td>
                          <td>
                            Oběd 1 - Hovězí pečeně na slanině,
                            <br /> houskový knedlík, ovoce
                          </td>
                          <td>
                            Oběd 2 - Losos se sýrovou omáčkou, <br /> brambory,
                            ovoce
                          </td>
                        </tr>
                        <tr>
                          <td>Polévka - Z vaječné jíšky</td>
                          <td>
                            Doplněk - Čaj, voda, ochucené mléko, <br />
                            sirup
                          </td>
                        </tr>
                        <tr>
                          <td rowSpan={2} className="prednirada">
                            <b>Úterý</b>
                          </td>
                          <td>
                            Oběd 1 - Zapečené těstoviny s uzeným masem,
                            <br /> steril. salát
                          </td>
                          <td>
                            Oběd 2 - Rybí karbanátek s vepřovým masem,
                            <br /> brambory, steril. salát
                          </td>
                        </tr>
                        <tr>
                          <td>Polévka - Zeleninová s drobením</td>
                          <td>
                            Doplněk - Voda, čaj, mošt, sirup,
                            <br /> ochucené mléko
                          </td>
                        </tr>

                        <tr>
                          <td rowSpan={2} className="prednirada">
                            <b>Středa</b>
                          </td>
                          <td>Oběd 1 - Boloňské špagety se sýrem</td>
                          <td>
                            Oběd 2 - Zeleninový salát se šunkou a mozzarelou,
                            <br /> toustový chléb
                          </td>
                        </tr>
                        <tr>
                          <td>Polévka - Uzená s těstovinou</td>
                          <td>
                            Doplněk - Čaj, voda, ochucené mléko, <br />
                            džus
                          </td>
                        </tr>

                        <tr>
                          <td rowSpan={2} className="prednirada">
                            <b>Čtvrtek</b>
                          </td>

                          <td>
                            Oběd 1 - Vepřová krkovička, brambory,
                            <br /> zelenina
                          </td>
                          <td>Oběd 2 - Bramborové placky, zeleninový salát</td>
                        </tr>

                        <tr>
                          <td>
                            Polévka - Zeleninová s luštěninovou <br /> směsí
                          </td>
                          <td>Doplněk - Čaj, voda, sirup, ochucené mléko</td>
                        </tr>

                        <tr>
                          <td rowSpan={2} className="prednirada">
                            <b>Pátek</b>
                          </td>
                          <td>
                            Oběd 1 - Obalovaný květák, brambory, tatarka,
                            <br /> rajče
                          </td>
                          <td>Oběd 2 - Povidlové knedlíky s tvrdým tvarohem</td>
                        </tr>
                        <tr>
                          <td>Polévka - Rybí se smaženým hráškem</td>
                          <td>
                            Doplněk - Čaj, voda, ovocný nápoj, <br />
                            koktejl
                          </td>
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
