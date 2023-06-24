import ToDo from "../../components/ToDo"

export default function Task(){
    const tarefas = [
        "Ir ao Mercado",
        "Lavar o Carro",
        "Estudar React",
    ]
    return(
        <>
        <h2>Tarefas</h2>
        <ToDo tarefas={tarefas}/>

        </>
    )
}