import { createSlice } from "@reduxjs/toolkit";

const turnosEmptyState = {
    turnos:[]
};

export const TurnosSlice = createSlice(
    {
        name:"turnos",
        reducers:{
            agregarTurno:(state,action) =>{
                return {
                    ...state,
                    turnos: [...state.turnos, action.payload]
                };
            },
            eliminarTurno:(state, action)=>{
                return {
                    ...state,
                    turnos: state.turnos.filter(turno => turno.id !== action.payload)
                  };
            },
            vaciarTurnos:() =>{
                return turnosEmptyState;
            }
        }
    }
);

export const { agregarTurno, eliminarTurno , vaciarTurnos} = turnosSlice.action;