import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () =>{
    return (
        <>
        <NavLink to={'/'}>Home</NavLink> |
        <NavLink to={'/crear'}>Creador de Turnos</NavLink> |
        <NavLink to={'/listar'}>Listado de Turnos</NavLink>
        </>
    );
}