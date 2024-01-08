import { useState } from "react";
import {tiposTurno} from "../domain/tipos-turno";
import { TurnoObject } from "../domain/turno-class"



export const Turno = ()=>{
    let trn= new TurnoObject(tiposTurno.ONLINE,"tipo", "fecha");
    const [turno, setTurno] = useState(trn);

    // let turno = new TurnoObject(tiposTurno.ONLINE,"tipo", "fecha");
    // turno["oficial"]= "oficial sarasa";
    // turno["fechaProgramada"]= "fechaProgramada";
    // turno["fechaFin"]= "fechaFin";
    
    return (
        <div>
            <h3>Turno <span>#</span></h3>
            Sector: {turno.tipo}<br/>
            Motivo de turno: {turno.motivo}<br/>
            Fecha de turno: {turno.fecha}<br/>
            { turno.tipo == tiposTurno.OFICIAL && 
                <>
                Oficial: {turno.oficial}
                </>
            }
            {
                turno.tipo == tiposTurno.ONLINE && 
                <>
                Fecha programada: {turno.fechaProgramada}<br/>
                Fecha fin: {turno.fechaFin}
                </>
            }
        </div>
    )
}