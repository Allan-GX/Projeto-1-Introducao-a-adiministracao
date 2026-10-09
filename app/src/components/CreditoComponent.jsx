import BotaoCorreto from "./BotaoCorreto";

function CreditoComponent({progress,simple,acerto,setAcerto,setProgress}){

    const handleProgress = () => {
        if (progress >=4){
            return 1;
        } else {
            return progress;
        }
    }
    return (
    <div className="rodape">
        <p>
            <BotaoCorreto progress={handleProgress()} acerto={acerto} setAcerto={setAcerto} simple={simple} id={6} setProgress={setProgress}/>
            {" "}os direitos reservados a{" "}
            <BotaoCorreto progress={handleProgress()} acerto={acerto} setAcerto={setAcerto} simple={simple} id={7} setProgress={setProgress}/>
            {" "}e{" "}
            <BotaoCorreto progress={handleProgress()} acerto={acerto} setAcerto={setAcerto} simple={simple} id={8} setProgress={setProgress}/>
            {" "}-{" "}
            <BotaoCorreto progress={handleProgress()} acerto={acerto} setAcerto={setAcerto} simple={simple} id={9} setProgress={setProgress}/>
        </p>
    </div>
    );
}

export default CreditoComponent;
