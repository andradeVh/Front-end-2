import { beforeEach, vi, expect, test, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react"
import Exclamacao from ".";

beforeEach(() => {
    vi.clearAllMocks()

})

describe("O componente Exclamacao", () => {


    test("Deve ser cinza quando não selecionado", () => {
        render(<Exclamacao selecionado={false} aoSelecionar={() => { }} />)

        const exclamacao = screen.getByTestId("exclamacao")

        expect(exclamacao.getAttribute("color")).toBe("gray")
    })


    test("Deve ser azul quando selecionado", () => {
        render(<Exclamacao selecionado={true} aoSelecionar={() => { }} />)

        const exclamacao = screen.getByTestId("exclamacao")

        expect(exclamacao.getAttribute("color")).toBe("blue")
    })

    test("Deve chamar a função aoSelecionar quando clicado", () => {
        // Arrange
        const funcaoMock = vi.fn()
        render(<Exclamacao selecionado={false} aoSelecionar={funcaoMock} />)
        const exclamacao = screen.getByTestId("exclamacao")

        // Act
        fireEvent.click(exclamacao)

        // Assert
        expect(funcaoMock).toHaveBeenCalled()

    })

})