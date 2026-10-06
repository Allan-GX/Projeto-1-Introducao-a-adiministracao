function Sobre ({vis}){
    if (vis != 0){
        return (
            <div>
                <p>Este quiz trata de um quiz de 
                    conhecimentos diversos, onde você
                    terá que acertar todas as Perguntas 
                    sequencialmente sem errar nenhuma vez,
                    então se divirta e fique atento as alternativas.
                    Boa sorte!!!
                </p>
            </div>);
    } else {
        return (<></>);
    }
}

export default Sobre;