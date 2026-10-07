function BotaoCorreto({progress,setProgress,id}){

    const data = [
        {
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "Padrão questão resposta na alternativa 2" },
            2: { canClick: true, correct: true, content: "Resposta Certa" },
            3: { canClick: true, correct: false, content: "Padrão questão resposta na alternativa 2" },
            4: { canClick: true, correct: false, content: "Padrão questão resposta na alternativa 2" },
            5: { canClick: false, correct: false, content: "1."},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        },
        {
            1: { canClick: true, correct: false, content: "Resposta numero da questão" },
            2: { canClick: true, correct: false, content: "Resposta numero da questão" },
            3: { canClick: true, correct: false, content: "Resposta numero da questão" },
            4: { canClick: true, correct: false, content: "Resposta numero da questão" },
            5: { canClick: true, correct: true, content: "2"},
            6: { canClick: false, correct: false, content: "Todos"},
            7: { canClick: false, correct: false, content: "Allan Gabryel"},
            8: { canClick: false, correct: false, content: "Miro Machado"},
            9: { canClick: false, correct: false, content: "2026"}
        }
    ];

    const item_data = data[progress][id];

    
    function handleEscolha() {
        if (item_data.canClick){
            const AltCorreta = item_data.correct;
            if (AltCorreta){
                console.log("chegou aq");
                setProgress(progress + 1);
            }else {
                setProgress(0);
            }
        }
    }
    let classe = "";
    if(item_data.canClick) {
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
        if (id == 5){
            classe = "question-number";
        }else if (id > 5){
            classe = "hiding";
        }
        return (
            <span className={classe}>{item_data.content}</span>
        );
    }
    }

export default BotaoCorreto;