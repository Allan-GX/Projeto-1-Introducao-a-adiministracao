import Opcao from "./BotaoCorreto";

function CreditoComponent({progress,simple,acerto,setAcerto,setProgress}){

    const handleProgress = () => {
        if (progress >=3){
            return 1;
        } else {
            return progress;
        }
    }
    return (
    <div className="rodape">
        <p>
            <Opcao progress={handleProgress()} acerto={acerto} setAcerto={setAcerto} simple={simple} id={6} setProgress={setProgress}/>
            {" "}os direitos reservados a{" "}
            <Opcao progress={handleProgress()} acerto={acerto} setAcerto={setAcerto} simple={simple} id={7} setProgress={setProgress}/>
            {" "}e{" "}
            <Opcao progress={handleProgress()} acerto={acerto} setAcerto={setAcerto} simple={simple} id={8} setProgress={setProgress}/>
            {" "}-{" "}
            <Opcao progress={handleProgress()} acerto={acerto} setAcerto={setAcerto} simple={simple} id={9} setProgress={setProgress}/>
        </p>
    </div>
    );
}

export default CreditoComponent;
