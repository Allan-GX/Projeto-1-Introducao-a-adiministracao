import Opcao from "./BotaoCorreto";
import enunciados from "./model/enunciado_data";

function PerguntasComponent({progress,simple,acerto,setAcerto,setProgress}){

    
    const enunciado = enunciados[progress - 1];
    
    return (
        <>
            <Opcao className="numero-questao" progress={progress} simple={simple} acerto={acerto} setAcerto={setAcerto} id={5} setProgress={setProgress}/>
            <h2 className="enunciado" >{enunciado}</h2>
        </>
    );
}

export default PerguntasComponent;