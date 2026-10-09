import Opcao from "./BotaoCorreto";

const Collection = ({progress,acerto, setAcerto, simple,setProgress}) => {
    return (
            <div className=".grid-alternativas">
                <Opcao progress={progress}acerto={acerto} setAcerto={setAcerto} simple={simple} setProgress={setProgress} id={1}/>
                <Opcao progress={progress}acerto={acerto} setAcerto={setAcerto} simple={simple} setProgress={setProgress} id={2}/>
                <Opcao progress={progress}acerto={acerto} setAcerto={setAcerto} simple={simple} setProgress={setProgress} id={3}/>
                <Opcao progress={progress}acerto={acerto} setAcerto={setAcerto} simple={simple} setProgress={setProgress} id={4}/>
            </div>
    );
}
export default Collection;