function Sobre ({vis}){
    if (vis != 0){
        return (
            <div className="sobre">
                <p>TDquiz (Tente denovo quiz)trata-se de um quiz de 
                    conhecimentos diversos, onde você
                    terá que acertar todas as 20 perguntas 
                    sequencialmente sem errar nenhuma vez, e caso erre voltará do inicio.
                    Então se divirta e fique atento as alternativas.
                    Boa sorte!!!
                </p>
            </div>);
    } else {
        return (<></>);
    }
}

export default Sobre;