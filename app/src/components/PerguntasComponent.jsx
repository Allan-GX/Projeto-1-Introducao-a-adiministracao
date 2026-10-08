import Opcao from "./BotaoCorreto";

function PerguntasComponent({progress,simple,acerto,setAcerto,setProgress}){

    const enunciados = {
        1: "Escolha a primeira alternativa",
        2: "Essa é a terceira"
    };
    return (
        <>
            <Opcao className="numero-questao" progress={progress} simple={simple} acerto={acerto} setAcerto={setAcerto} id={5} setProgress={setProgress}/>
            <h2 className="enunciado">{enunciados[progress]}</h2>
        </>
    );
}

export default PerguntasComponent;