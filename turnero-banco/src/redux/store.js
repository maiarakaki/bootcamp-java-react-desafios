import { configureStore } from "@reduxjs/toolkit";
import { TurnosSlice } from "./turnos/turnos";

const TurnosStore = configureStore(
    {
        reducer:{
            turnos: TurnosSlice.reducer
        }
    }
);

export default TurnosStore;