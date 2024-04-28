import { HashRouter, Routes, Route } from "react-router-dom";
import Dochazka from "../Dochazka/Dochazka";
import AboutUs from "../AboutUs/oNas";
import DomaciUkoly from "../DomaciUkoly/DomaciUkoly";
import Hodnoceni from "../Hodnoceni/Hodnoceni";
import Profil from "../Profil/Profil";
import Login from "../Login/Login";
import Main from "../Main/Main";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/main" element={<Main />}/>
                <Route path="/profil" element={<Profil />}/>
                <Route path="/hodnoceni" element={<Hodnoceni />}/>
                <Route path="/aboutus" element={<AboutUs />}/>
                <Route path="/domaciukoly" element={<DomaciUkoly />}/>
                <Route path="/dochazka" element={<Dochazka />}/>
            </Routes>   
        </HashRouter>
    )
}