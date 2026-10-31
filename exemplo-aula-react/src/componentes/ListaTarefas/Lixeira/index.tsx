import { BsTrash } from "react-icons/bs";

interface LixeiraProps {
    aoClicar: () => void
}

const Lixeira = ({ aoClicar }: LixeiraProps) => {

    return (
        <BsTrash 
            color="red" 
            onClick={aoClicar}
        />)
}

export default Lixeira