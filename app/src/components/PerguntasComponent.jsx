import { useState } from "react"
import BotaoCorreto from "./BotaoCorreto";

function PerguntasComponent({progress,setProgress}){

    const enunciados = {
        1: "Escolha a primeira alternativa",
        2: "Essa é a terceira"
    };
    return (
        <>
            <BotaoCorreto progress={progress} id={5} setProgress={setProgress}/>
            <h2 className="enunciado">{enunciados[progress]}</h2>
        </>
    );
}

export default PerguntasComponent;