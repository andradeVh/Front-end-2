import Cabecalho from "../../components/Cabecalho"
import Principal from "../../components/Principal"
import Rodape from "../../components/Rodape"

const Home = () => {

    // Fragment
    return (
        <> 
            <Cabecalho titulo="Receitas da Nonna" />
            <Principal />
            <Rodape />
        </>
    )
}

export default Home