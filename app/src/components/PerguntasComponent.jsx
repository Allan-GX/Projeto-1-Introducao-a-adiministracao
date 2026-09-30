import { useState } from "react"
import BotaoCorreto from "./BotaoCorreto";

function PerguntasComponent({progress}){

    const enunciados = {
        1: "Escolha a primeira alternativa",
        2: "Essa é a terceira"
    };

    function handleResposta(Altcorreta) {
        if (Altcorreta) {
/*             setResposta("certo") */
            console.log("correto");
            setPergunta((prevPergunta) => prevPergunta + 1);
        } else {
/*             setResposta("errado") */
            console.log("incorreto");
            setPergunta(1);
        }
    }
    switch(pergunta){
        case 1:
            return (
                <div className="quiz-conteiner">
                    <button type="button" className="numero-questao">{pergunta}.</button>
                    <h2 className= "enunciado"> Escolha a primeira alternativa </h2>
                    <BotaoCorreto pergunta={pergunta} Responder= {handleResposta}></BotaoCorreto>
                </div>
            );

        case 2:
            return (
                <div className="quiz-conteiner">
                    <button type="button" className="numero-questao">{pergunta}.</button>
                    <h2 className= "enunciado"> Clica na terceira </h2>
                    <BotaoCorreto pergunta={pergunta} Responder= {handleResposta}></BotaoCorreto>
                </div>
                );

        default:
            return (
                <div className="quiz-container">
                    <h2>Fim do Quiz!</h2>
                    <button type="button" className="text-button" onClick={() => setPergunta(1)}>
                        Reiniciar
                    </button>
                </div>
                );
    }
}

export default PerguntasComponent;