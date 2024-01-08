import { createSlice } from "@reduxjs/toolkit";

const turnosEmptyState = {
    turnos:[{
        id:1,
        tipo:"caja",
        fecha: "ahora"
    },
    {
        id:2,
        tipo:"oficial", 
        fecha:"despues"
    }
]
};

export const TurnosSlice = createSlice(
    {
        name:"turnos",
        initialState:turnosEmptyState,
        reducers:{
            agregarTurno:(state,action) =>{
                return {
                    turnos: [...state.turnos, action.payload]
                };
            },
            eliminarTurno:(state, action)=>{
                return {
                    ...state,
                    turnos: state.turnos.filter(turno => turno.id !== action.payload.id)
                  };
            },
            vaciarTurnos:() =>{
                return turnosEmptyState;
            }
        }
    }
);

export const { agregarTurno, eliminarTurno , vaciarTurnos} = TurnosSlice.actions;