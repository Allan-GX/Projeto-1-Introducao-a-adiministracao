function Fim({progress, setProgress}){
    function handleClick(){
        setProgress(0);
    }
    if (progress == 3){
    return (
        <div>
            <h1>Parabéns por concluir o quiz!</h1>
            <p>Deseja jogar denovo?</p>
            <button onClick={handleClick}>Clique aqui</button>
        </div>);
    } else {
        return (<></>);
    }
}

export default Fim;