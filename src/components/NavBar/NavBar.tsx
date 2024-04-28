import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Avatar, styled } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import "../NavBar/NavBar.css";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function NavBar() {
  const momentalniLokace = useLocation();

  return (
    <nav>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />

        <AppBar position="absolute">
          <Toolbar
            sx={{
              pr: "24px",
              backgroundColor: "#FFF",
            }}
          >
            <Link to={"/main"} className="logo">
              <Typography
                variant="h5"
                sx={{
                  textDecoration: "none",
                  color: "#7f00ff",
                  fontWeight: 700,
                  lineHeight: 1.06,
                  fontFamily: "Lucida Sans Unicode",
                  paddingLeft: "90px",
                  paddingRight: "30px",
                  "&:hover": {
                    color: "#ab7cff ",
                    transition: "0.2s",
                  },
                }}
              >
                SmartŠkolství
              </Typography>
            </Link>

            <Link to={"/profil"}>
              <IconButton
                color="inherit"
                sx={{ left: 1465, position: "absolute", bottom: 5 }}
              >
                <Avatar alt="Avatar" src="" sx={{ width: 38, height: 38 }} />
              </IconButton>
            </Link>

            <ul className="nav">
              <li
                className={momentalniLokace.pathname === "/hodnoceni" ? "aktivní" : ""}
              >
                <Link to={"/hodnoceni"} className="linky">
                  Hodnocení
                </Link>
              </li>
              <li className={momentalniLokace.pathname === "/dochazka" ? "aktivní" : ""}>
                <Link to={"/dochazka"} className="linky">
                  Docházka
                </Link>
              </li>

              <li
                className={momentalniLokace.pathname === "/domaciukoly" ? "aktivní" : ""}
              >
                <Link to={"/domaciukoly"} className="linky">
                  Domácí Úkoly
                </Link>
              </li>
              <li className={momentalniLokace.pathname === "/aboutus" ? "aktivní" : ""}>
                <Link to={"/aboutus"} className="linky">
                  O Nás
                </Link>
              </li>
            </ul>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
}
