import { useEffect, useState } from "react";
import {tiposTurno} from "../domain/tipos-turno";
import { SharedService } from "../../listar-turnos/rxjs/shared-service";
import { useDispatch } from "react-redux";
import { eliminarTurno } from "../../redux/turnos/turnos";



export const Turno = ()=>{
    const [turno, setTurno] = useState(undefined);
    const dispatcher = useDispatch();
    let subscription;
    useEffect(()=>{
        subscription = SharedService.getSubject().subscribe(
            data =>{
                setTurno(data);
            }
        );

        return()=>{
            subscription.unsubscribe();
        }
    },[]);

    const finalizar = () =>{
        dispatcher(eliminarTurno(turno));
        SharedService.reset();
    }

    return (
        <>
            {
                turno ? 
                <div>
                    <h2>Atendido</h2>
                    <h3>Turno <span>#{turno.id}</span></h3>
                    Sector: {turno.tipo}<br/>
                    Motivo de turno: {turno.motivo}<br/>
                    Fecha de turno: {turno.fechaTurno}<br/>
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
                    <button onClick={finalizar} className='btn btn-danger'>Finalizar</button>
                </div> : 
                <></>
            }
        </>
    )
}