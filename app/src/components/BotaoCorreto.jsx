function BotaoCorreto({pergunta, Responder}){

    const respostasCorretas = {
        1: "1",
        2: "3"
    }
    
    function handleEscolha(opcao) {
        const AltCorreta = String(opcao) === String(respostasCorretas[pergunta]);
        Responder(AltCorreta);
    }
    
    switch(pergunta){
        case 1:
            return(
            <div className=".grid-alternativas">
                <button className="text-button" onClick={() => handleEscolha("1")}>Alt 1</button>
                <button className="text-button" onClick={() => handleEscolha("2")}>Alt 2</button>
                <button className="text-button" onClick={() => handleEscolha("3")}>Alt 3</button>
                <button className="text-button" onClick={() => handleEscolha("4")}>Alt 4</button>
            </div>
            );
        case 2:
            return(
            <div className=".grid-alternativas">
                <button className="text-button"onClick={() => handleEscolha("1")}>Resposta Correta</button>
                <button className="text-button"onClick={() => handleEscolha("2")}>Me escolhe</button>
                <button className="text-button"onClick={() => handleEscolha("3")}>Sou a terceira</button>
                <button className="text-button"onClick={() => handleEscolha("4")}>é a de cima</button>
            </div>);
        default:
            return (<div>Fim das perguntas!</div>);
    }
}

export default BotaoCorreto;