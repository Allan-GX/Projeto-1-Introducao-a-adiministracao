function BotaoCorreto({progress,id}){

    const data = [
        {
            1:
            {
                1:
                {
                    canClick:true,
                    correct:false,
                    content:"essa aq ta correta"
                }
        },

    }
    ];

    
    function handleEscolha(progress,id) {
        if (data[progress][id].canClick){
            const AltCorreta = data[progress][id].correct;
            Responder(AltCorreta);
        }
    }
    if(data[progress][id].canClick) {
        if (id < 5){
            const classe = "text-button";
        } else if (id > 4) {
            const classe = "hiding";
        } return (
        <button className={classe} onClick={() => handleEscolha(progress,id)}>{data[progress][id].content}</button>
    );
    }else {
        return (
            <p>{data[progress][id].content}</p>
        );
    }
    }

export default BotaoCorreto;