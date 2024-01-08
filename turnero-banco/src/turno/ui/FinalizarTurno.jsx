export const FinalizarTurno = () =>{

    const dispatcher = useDispatch();
    const subscription = SharedService.getSubject();
    useEffect(()=>{
        subscription.subscribe(
            data =>{
                console.log(data);
                setTurno(data);
            }
        );

        return()=>{
            //subscription.unsubscribe();
        }
    },[]);

    const finalizar = () =>{
        dispatcher(eliminarTurno(turno));
        subscription.reset();
    }


    return (
        <button onClick={finalizar} className='btn btn-danger'>Finalizar</button>
    )
}