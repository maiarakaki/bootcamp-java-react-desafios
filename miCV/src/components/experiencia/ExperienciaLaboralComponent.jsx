import { ExperienciaComponent } from "./ExperienciaComponent"

export const ExperienciaLaboralComponent = (props) => {
    return (
        <>
            <h1>Experiencia Laboral</h1>
            {props.experience.map((exp) => (
                <ExperienciaComponent experience={exp} key={exp.index} />
            ))}
        </>
    )
}