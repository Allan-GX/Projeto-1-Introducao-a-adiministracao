import Titulo from "../assets/Tituloquiz.png"

function Fim({progress,acerto,setAcerto,setSimple, setProgress}){

    function handleClick(){
        setSimple(0);
        setAcerto(0);
        setProgress(0);
    }

    if (progress == 22){
        return (
            <div className="quiz-container">
                <img src={Titulo} alt="TDquiz" className="imagemTitulo"/>
                <h1>Parabéns por concluir o nosso quiz!</h1>
                <h2>você acertou {acerto} questões!</h2>
                <p className="agradecimento">Agradecemos por jogar nosso quiz! <br/> caso queira jogar
                    novamente <br/> basta clicar no botão abaixo.
                </p>
                <button className="hub-button" onClick={handleClick}> Jogar Novamente</button>
            </div>);
    } else {
        return (<></>);
    }
}

export default Fim;