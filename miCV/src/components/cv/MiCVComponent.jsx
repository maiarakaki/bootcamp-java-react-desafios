import { DatosPersonales } from "../datos/DatosPersonalesComponent"
import { EducacionComponent } from "../educacion/EducacionComponent"
import { ExperienciaComponent } from "../experiencia/ExperienciaComponent"
import { FotoComponent } from "../foto/FotoComponentComponent"

export const MiCVComponent = () =>{
    return (
        <>
        <FotoComponent />
        <hr/>
        <DatosPersonales />
        <hr/>
        <EducacionComponent />
        <hr/>
        <ExperienciaComponent />
        </>
    )
}