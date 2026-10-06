import BotaoCorreto from "./BotaoCorreto";

function CreditoComponent({progress,setProgress}){

    return (
    <div className="rodape">
        <p>
            <BotaoCorreto progress={progress} id={6} setProgress={setProgress}/>
            {" "}os direitos reservados a{" "}
            <BotaoCorreto progress={progress} id={7} setProgress={setProgress}/>
            {" "}e{" "}
            <BotaoCorreto progress={progress} id={8} setProgress={setProgress}/>
            {" "}-{" "}
            <BotaoCorreto progress={progress} id={9} setProgress={setProgress}/>
        </p>
    </div>
    );
}

export default CreditoComponent
