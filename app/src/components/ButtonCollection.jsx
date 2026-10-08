import BotaoCorreto from "./BotaoCorreto";

const Collection = ({progress,acerto, setAcerto, simple,setProgress}) => {
    return (
            <div className=".grid-alternativas">
                <BotaoCorreto progress={progress}acerto={acerto} setAcerto={setAcerto} simple={simple} setProgress={setProgress} id={1}/>
                <BotaoCorreto progress={progress}acerto={acerto} setAcerto={setAcerto} simple={simple} setProgress={setProgress} id={2}/>
                <BotaoCorreto progress={progress}acerto={acerto} setAcerto={setAcerto} simple={simple} setProgress={setProgress} id={3}/>
                <BotaoCorreto progress={progress}acerto={acerto} setAcerto={setAcerto} simple={simple} setProgress={setProgress} id={4}/>
            </div>
    );
}
export default Collection;