import { useRef, useState } from "react";
import { allNumbers, toIntArray, tokenize, validDate, validDateFormat } from "../app-utils/utils";

export const FechaValidaComponent = () =>{
    const [userInput, setUserInput] = useState('23/12/2022');
    const [fechaValida, setFechaValida] = useState(true);

    const update = e =>{
        setUserInput(e.target.value);
    }

    const validate = (data) =>{
        const tokenized = tokenize(data);
        const integers = toIntArray(tokenized);
        setFechaValida(validDate(integers));

    }

    return (
        <>
        <h1>Validador de fechas</h1>
        <h2>Ingrese fecha (dd/mm/yyyy)</h2>
        <input value={userInput} onChange={update}></input>
        <button onClick={() => validate(userInput)}>Validar</button>
        {
            fechaValida ?
            <>
                Fecha valida wiii
            </>
            :
            <>
                Fecha inválida buuuu
            </>
        }
        </>
    );
}