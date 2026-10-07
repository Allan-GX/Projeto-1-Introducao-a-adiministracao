import Titulo from "../assets/Tituloquiz.png"

function Erro({progress, setProgress}){

    function handleClick(){
        setProgress(0);
    }
    
    if (progress == 67){
    return (
        <div className="quiz-container">
            <img src={Titulo} alt="TDquiz" className="imagem"/>
            <h1>Que pena, você Errou!</h1>
            <p className="agradecimento"> Para tentar novamente <br/> basta clicar no botão abaixo.</p>
            <button className="hub-button" onClick={handleClick}>Clique aqui</button>
        </div>);
    } else {
        return (<></>);
    }
}

export default Erro;