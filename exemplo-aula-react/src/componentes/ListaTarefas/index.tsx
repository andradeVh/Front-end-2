import type { Tarefa } from "../../modelo/interface"
import useTarefas from "../../hooks/useTarefas"
import Prioridade from "../Prioridade"
import Lixeira from "./Lixeira"

interface ListaTarefasProps {
    lista: Tarefa[]
}

const ListaTarefas = ({ lista }: ListaTarefasProps) => {

    const { apagarTarefa } = useTarefas()

    return (
        <ul className="list-group">
            {lista.map(tarefa => (
                <li key={tarefa.id} className="list-group-item d-flex justify-content-between">
                    <p className="mb-0">{tarefa.titulo}</p>
                    <Prioridade id={tarefa.id} />
                    <Lixeira aoClicar={() => apagarTarefa(tarefa.id)} />
                </li>
            ))}
        </ul>
    )
}

export default ListaTarefas