import { DatosPersonales } from "../datos/DatosPersonalesComponent"
import { EducacionComponent } from "../educacion/EducacionComponent"
import { ExperienciaLaboralComponent } from "../experiencia/ExperienciaLaboralComponent";
import { FotoComponent } from "../foto/FotoComponentComponent"

function MiCVComponent(props){
    return (
        <>
        <h1>Curriculum Vitae</h1>
        <FotoComponent photo={props.data.photo}/>
        <hr/>
        <DatosPersonales personalInfo={props.data.personal}/>
        <hr/>
        <EducacionComponent education={props.data.education}/>
        <hr/>
        <ExperienciaLaboralComponent experience={props.data.experience}/>
        </>
    )
}

export default MiCVComponent;