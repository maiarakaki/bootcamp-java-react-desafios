import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home/Home";
import { CrearTurno } from "./crear-turno/CrearTurno";
import { ListadoTurno } from "./listar-turnos/ListadoTurno";
import { Navbar } from "./navbar/Navbar";

export const AppRouter = () =>{
    return(
        <>
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/crear" element={<CrearTurno/>}/>
                <Route path="/listar" element={<ListadoTurno/>}/>
            </Routes>
        </BrowserRouter>
        </>
    );
}