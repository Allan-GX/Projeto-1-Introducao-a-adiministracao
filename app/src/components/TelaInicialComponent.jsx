import Sobre from "./SobreoquizComponent";

function Inicio(){

    function handleClick(){
        <Sobre></Sobre>
    }

    return <div>
        <h1>nome do quiz</h1>
        <button>jogar</button>
        <button onClick={handleClick}>sobre o quiz</button>
    </div>
}

export default Inicio;