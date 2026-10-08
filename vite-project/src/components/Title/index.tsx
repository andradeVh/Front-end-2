interface TituloProps {
    texto: String
}

const Titulo = ({ texto }: TituloProps) => {
    return (
    <h1>{texto}</h1>
    )
}

export default Titulo