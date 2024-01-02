import { DatosPersonales } from "../datos/DatosPersonalesComponent"
import { EducacionComponent } from "../educacion/EducacionComponent"
import { ExperienciaLaboralComponent } from "../experiencia/ExperienciaLaboralComponent";
import { FotoComponent } from "../foto/FotoComponentComponent"
import styles from './MiCVComponent.module.css'

function MiCVComponent(props){
    return (
        <div className="container mt-5">
            <div className="container-fluid">
                <h1 className={styles.header}>Curriculum Vitae</h1>
                <div className="row">
                    <div className="col-md-4">
                        <FotoComponent photo={props.data.photo}/>

                    </div>
                    <div className="col order-md-first">
                        <DatosPersonales personalInfo={props.data.personal} title={props.data.experience[0]}/>
                    </div>
                    <div className="row">

                        <hr/>
                        <EducacionComponent education={props.data.education}/>
                        <hr/>
                        <ExperienciaLaboralComponent experience={props.data.experience}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiCVComponent;