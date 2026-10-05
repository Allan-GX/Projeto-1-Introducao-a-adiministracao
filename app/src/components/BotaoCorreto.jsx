function BotaoCorreto({progress,setProgress,id}){

    const data = [
    {
        1: {
            1: { canClick: true, correct: false, content: "Primeira alternativa da questão 1" },
            2: { canClick: true, correct: true, content: "Segunda alternativa da questão 1" },
            3: { canClick: true, correct: false, content: "Terceira alternativa da questão 1" },
            4: { canClick: true, correct: false, content: "Quarta alternativa da questão 1" },
            5: { canClick: false, correct: false, content: "1"}
        },
        2: {
            1: { canClick: true, correct: true, content: "Primeira alternativa da questão 2" },
            2: { canClick: true, correct: false, content: "Segunda alternativa da questão 2" },
            3: { canClick: true, correct: false, content: "Terceira alternativa da questão 2" },
            4: { canClick: true, correct: false, content: "Quarta alternativa da questão 2" }
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
        } else if (id > 4) {
            classe = "hiding";
        } return (
        <button className={classe} onClick={() => handleEscolha()}>{item_data.content}</button>
    );
    }else {
        return (
            <p>funcionou</p>
        );
    }
    }

export default BotaoCorreto;