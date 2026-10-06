function BotaoCorreto({progress,setProgress,id}){

    const data = [
    {
        1: {
            1: { canClick: true, correct: false, content: "Padrão questão resposta na alternativa 2" },
            2: { canClick: true, correct: true, content: "Resposta Certa" },
            3: { canClick: true, correct: false, content: "Padrão questão resposta na alternativa 2" },
            4: { canClick: true, correct: false, content: "Padrão questão resposta na alternativa 2" },
            5: { canClick: true, correct: false, content: "1."},
            6: { canClick: true, correct: false, content: "Todos"},
            7: { canClick: true, correct: false, content: "Allan Gabryel"},
            8: { canClick: true, correct: false, content: "Miro Machado"},
            9: { canClick: true, correct: false, content: "2026"}
        },
        2: {
            1: { canClick: true, correct: false, content: "Resposta numero da questão" },
            2: { canClick: true, correct: false, content: "Resposta numero da questão" },
            3: { canClick: true, correct: false, content: "Resposta numero da questão" },
            4: { canClick: true, correct: false, content: "Resposta numero da questão" },
            5: { canClick: true, correct: true, content: "2"},
            6: { canClick: true, correct: false, content: "Todos"},
            7: { canClick: true, correct: false, content: "Allan Gabryel"},
            8: { canClick: true, correct: false, content: "Miro Machado"},
            9: { canClick: true, correct: false, content: "2026"}
        }
    }
    ];

    const item_data = data[0][progress][id];

    
    function handleEscolha() {
        if (item_data.canClick){
            const AltCorreta = item_data.correct;
            if (AltCorreta){
                console.log("chegou aq");
                setProgress(progress + 1);
            }
        }
    }
    if(item_data.canClick) {
        let classe = ""
        if (id < 5){
            classe = "text-button";
        } else if (id == 5) {
            classe = "question-number";
        } else if (id > 5) {
            classe = "hiding";
        } return (
        <button className={classe} onClick={() => handleEscolha()}>{item_data.content}</button>
    );
    }else {
        return (
            <p></p>
        );
    }
    }

export default BotaoCorreto;