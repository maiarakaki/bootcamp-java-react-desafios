import styles from './DatosPersonales.module.css';

export const DatosPersonales = (props) => {
    return (
        <>
            <h1>Datos Personales</h1>
            {
                props.personalInfo.name ?
                    <>
                        <h2>Nombre y Apellido</h2>
                        {props.personalInfo.name} {props.personalInfo.lastName}
                    </>
                    :
                    <></>
            }
            {props.personalInfo.address ?
                <>
                    <h2>Dirección</h2>
                    {props.personalInfo.address}
                </>
                :
                <></>
            }
            {
                props.personalInfo.email ?
                    <>
                        <h2>email</h2>
                        {props.personalInfo.email}
                    </>
                    :
                    <></>
            }
            {
                props.personalInfo.mobile ?
                    <>
                        <h2>teléfono</h2>
                        {props.personalInfo.mobile}
                    </>
                    :
                    <></>
            }

        </>
    );
}