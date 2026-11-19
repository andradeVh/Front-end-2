import { expect, test } from "vitest"
import { paraTarefa } from "./tarefaMapper"

const dto = {
    id: 0,
    todo: "tarefa teste",
    completed: false,
    userId: 0
}

// resultado = {
//     id:0,
//     titulo: "tarefa teste",
//     status: "a fazer"
// }

// Padrão de Testes de Software AAA (Arrange, Act, Assert) 
test("A função paraTarefa deve retornar um objeto do tipo Tarefa", () => {
    // ARRANGE + ACT
    const resultado = paraTarefa(dto)

    // ASSERT
    expect(resultado).toEqual({
        id:0,
        titulo: "tarefa teste",
        status: "a fazer"
    })
})