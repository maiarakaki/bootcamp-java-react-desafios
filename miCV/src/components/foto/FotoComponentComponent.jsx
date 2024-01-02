import styles from './FotoComponentComponent.module.css'

export const FotoComponent = (props) =>{
    return (
        <>
            <img className= {styles.profilePic} src={props.photo} />
        </>
    )
}