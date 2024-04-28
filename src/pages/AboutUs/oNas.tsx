import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import "../../index.css";
import NavBar from "../../components/NavBar/NavBar";

export default function oNas(props: any) {
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
                  <p id="nadpis">Podmínky Užívání</p>
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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">1. Úvodní Ustanovení</p>
                    <p className="obsah">
                      Tento dokument obsahuje podmínky užívání služby, které
                      stanovují vzájemná práva a povinnosti mezi uživatelem a
                      poskytovatelem služby. Přístupem nebo používáním této
                      služby uživatel souhlasí s těmito podmínkami a zavazuje se
                      je dodržovat.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">2. Registrace a Vytváření Účtu</p>
                    <p className="obsah">
                      Pro plné využívání služby je vyžadována registrace a
                      vytvoření uživatelského účtu. Uživatel je povinen
                      poskytnout pravdivé a aktuální informace při registraci.
                      Poskytnuté informace budou použity k identifikaci
                      uživatele a zabezpečení jeho účtu.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">3. Odpovědnost za Obsah</p>
                    <p className="obsah">
                      Uživatel je plně odpovědný za veškerý obsah, který vytváří
                      nebo sdílí prostřednictvím služby. Poskytovatel služby
                      nenese odpovědnost za obsah vytvořený uživatelem a má
                      právo odstranit obsah, který porušuje tyto podmínky.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">4. Ochrana Osobních Údajů</p>
                    <p className="obsah">
                      Poskytovatel služby dbá na ochranu osobních údajů
                      uživatelů a dodržuje veškeré platné zákony a předpisy
                      týkající se ochrany osobních údajů. Osobní údaje uživatelů
                      jsou chráněny a nejsou poskytovány třetím stranám bez
                      výslovného souhlasu uživatele.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">5. Změny v Podmínkách Užívání</p>
                    <p className="obsah">
                      Poskytovatel si vyhrazuje právo kdykoliv měnit podmínky
                      užívání služby. Uživatel bude informován o změnách a může
                      v případě nesouhlasu s novými podmínkami ukončit užívání
                      služby. Pokračování v používání služby po zveřejnění změn
                      znamená souhlas uživatele s novými podmínkami.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">6. Ukončení Užívání Služby</p>
                    <p className="obsah">
                      Uživatel má právo kdykoliv ukončit užívání služby a
                      deaktivovat svůj účet. Poskytovatel si vyhrazuje právo
                      kdykoliv ukončit poskytování služby uživateli, zejména v
                      případě porušení podmínek užívání.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">7. Platnost a Účinnost Podmínek</p>
                    <p className="obsah">
                      Tyto podmínky užívání vstupují v platnost a účinnost dnem
                      zveřejnění na webových stránkách služby. Uživatel je
                      povinen se s nimi seznámit a dodržovat je.
                    </p>
                  </Paper>
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
                    style={{
                      color: "#7f00ff",
                      fontSize: 32,
                      fontWeight: "bold",
                      fontFamily: "Lucida Sans Unicode",
                    }}
                  >
                    Zásady Ochrany Osobních Údajů
                  </p>
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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">1. Úvodní Ustanovení</p>
                    <p className="obsah">
                      Tento dokument obsahuje zásady ochrany osobních údajů,
                      které upravují způsob shromažďování, uchovávání a
                      využívání osobních údajů uživatelů služby. Zásady jsou
                      platné pro všechny uživatele a jsou nedílnou součástí
                      podmínek užívání služby.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">2. Typy Shromažďovaných Údajů</p>
                    <p className="obsah">
                      Poskytovatel služby shromažďuje různé typy osobních údajů,
                      včetně, ale neomezeně, jmen, e-mailových adres, adres
                      bydliště, demografických informací a chování na stránce.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">
                      3. Způsob Sběru a Uchovávání Údajů
                    </p>
                    <p className="obsah">
                      Osobní údaje jsou shromažďovány pouze s výslovným
                      souhlasem uživatele a jsou uchovávány v souladu s platnými
                      zákony a předpisy. Poskytovatel dbá na zabezpečení a
                      ochranu osobních údajů uživatelů.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">4. Využití Osobních Údajů</p>
                    <p className="obsah">
                      Poskytovatel využívá osobní údaje uživatelů výhradně ke
                      zlepšení poskytované služby, personalizaci obsahu a
                      nabídek pro uživatele a k poskytování relevantních
                      reklamních sdělení.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">
                      5. Předávání Osobních Údajů Třetím Stranám
                    </p>
                    <p className="obsah">
                      Osobní údaje uživatelů nejsou poskytovány třetím stranám
                      bez výslovného souhlasu uživatele, s výjimkou případů
                      stanovených zákonem nebo v souladu s těmito podmínkami.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">
                      6. Ochrana Osobních Údajů Uživatelů
                    </p>
                    <p className="obsah">
                      Poskytovatel dbá na ochranu osobních údajů uživatelů a
                      používá adekvátní technická a organizační opatření k
                      zabezpečení osobních údajů proti neoprávněnému nebo
                      nelegálnímu zpracování a proti jejich náhodné ztrátě,
                      zničení nebo poškození.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">
                      7. Práva Úživatelů v Souvislosti s Osobními Údaji
                    </p>
                    <p className="obsah">
                      Uživatelé mají právo požadovat přístup k svým osobním
                      údajům, opravu nebo smazání svých osobních údajů a omezení
                      jejich zpracování. Mají také právo vznést námitku proti
                      zpracování svých osobních údajů a právo na přenositelnost
                      údajů.
                    </p>
                  </Paper>

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
                      marginBottom: "50px",
                    }}
                  >
                    <p className="popisky">
                      8. Kontakt na Správce Osobních Údajů
                    </p>
                    <p className="obsah">
                      V případě dotazů, připomínek nebo stížností týkajících se
                      ochrany osobních údajů může uživatel kontaktovat správce
                      osobních údajů na uvedených kontaktních údajích na webové
                      stránce služby. Správce osobních údajů odpovídá na žádosti
                      uživatelů v souladu s platnými zákony a předpisy
                      týkajícími se ochrany osobních údajů.
                    </p>
                  </Paper>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
