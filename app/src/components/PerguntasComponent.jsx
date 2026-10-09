import Opcao from "./BotaoCorreto";

function PerguntasComponent({progress,simple,acerto,setAcerto,setProgress}){

    const enunciados = [
        "Em qual estado da matéria está o gelo",
        "Em que ano o brasil foi 'descoberto?'",
        "O que é poliformismo?",
        "Em tartarugas ninja, quantas tartarugas fazem parte do grupo?",
        "Sabendo que A = true B = true C = false return ( (A && !B) || C) \n qual o retorno?",
        "Qual a diferença entre memoria ram ECC e não ECC?",
        "Qual dessas NÃO É uma característica de um ornintorrinco?",
        "Qual o nome do criador do método que avalia se uma máquina consegue exibir um comportamento inteligente idêntico a de um humano?",
        "Qual. o. nome. do. protagonista. do. anime. Naruto.",
        "Qual arma é geralmente atrelada a classe bárbaro em rpgs?",
        "Qual o nome do homem mais rico do mundo?",
        "Qual a maior montanha existente do chão até o topo?",
        "Estamos em qual questão? esqueci...",
        "Qual o 527° ano bissexto?",
        "00110101 00100000 00101010 00100000 00110101 00111111",
        "Qual feature do cpython faz com que threading não seja efetivo?",
        "Qual desses não é uma forma de notação para diagramas de classe",
        "Qual desses irá entregar 'false' em javascript?",
        "Qual o useState que cuida de vigiar quantas perguntas você acertou neste quiz?",
        "quem é o MELHOR professor da faculdade católica??????????",
        "Questão bonus!! o que a sigla TDquiz significa?",
        "Qual o nome do homem mais rico da dc?"
    ];
    let enunciado = enunciados[progress - 1];
    function handleEntrada(){
        if (progress == 11){
            enunciado = enunciados[enunciados - 1];
        }
    }
    function handleSaida(){
        if (progress == 11){
            enunciado = enunciados[progress - 1];
        }
    }
    
    return (
        <>
            <Opcao className="numero-questao" progress={progress} simple={simple} acerto={acerto} setAcerto={setAcerto} id={5} setProgress={setProgress}/>
            <h2 className="enunciado" onMouseEnter={handleEntrada} onMouseLeave={handleSaida}>{enunciado}</h2>
        </>
    );
}

export default PerguntasComponent;