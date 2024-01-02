import { DatosPersonales } from "../datos/DatosPersonalesComponent"
import { EducacionComponent } from "../educacion/EducacionComponent"
import { ExperienciaComponent } from "../experiencia/ExperienciaComponent"
import { FotoComponent } from "../foto/FotoComponentComponent"

function MiCVComponent(props){
    console.log(props);
    return (
        <>
        <FotoComponent photo={props.data.photo}/>
        <hr/>
        <DatosPersonales personalInfo={props.data.personal}/>
        <hr/>
        <EducacionComponent education={props.data.education}/>
        <hr/>
        <ExperienciaComponent experience={props.data.experience}/>
        </>
    )
}

export default MiCVComponent;