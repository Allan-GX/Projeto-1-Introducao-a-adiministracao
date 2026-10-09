import data from './model/data'
function Opcao({progress,setProgress,id,simple, acerto,setAcerto}){

    const item_data = data[progress][id];

    
    function handleEscolha() {
        const AltCorreta = item_data.correct;
        if (AltCorreta){
            setProgress(progress + 1);
            setAcerto(acerto + 1);
        }else {
            if (simple){
                alert("Você errou! ainda pode prosseguir");
                setProgress(progress + 1);
            } else {
            setProgress(67);
            }
        }
    }

    const classe = () => {
        if (id < 5){
            return "text-button";
        } else if (id == 5) {
            return "question-number";
        } else if (id > 5) {
            return "hiding";
        }
    };

    if(item_data.canClick) {
        return (
            <button className={classe()} onClick={() => handleEscolha()}>{item_data.content}</button>
        );
    }else {
        return (
            <span className={classe()}>{item_data.content}</span>
        );
    }
    }

export default Opcao;
