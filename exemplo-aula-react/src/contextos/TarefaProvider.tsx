import { useState } from "react"
import type { Tarefa } from "../modelo/interface"
import TarefaContext from "./TarefaContext"

const TarefaProvider = ({ children }: { children: React.ReactNode }) => {
    const [tarefas, setTarefas] = useState<Tarefa[]>([
        {
            id: 1,
            titulo: 'estudar react',
            status: 'a fazer',
        },
        {
            id: 2,
            titulo: 'fazer trabalho FE2',
            status: 'a fazer'
        }
    ])

    return (
        <TarefaContext value={{ tarefas, setTarefas }}>
            {children}
        </TarefaContext>
    )
}

export default TarefaProvider